export function getSelectedText(): string {
  return window.getSelection()?.toString() ?? ''
}

// Slack's message input is a Quill editor inside a div[contenteditable="true"]
// with class `ql-editor` inside `.c-texty_input__wrapper` or `[data-qa="message_input"]`
export function isInsideSlackCompose(element: Element | null): boolean {
  if (!element) return false
  return !!element.closest('.ql-editor')
}

export function getSlackContext(currentUserName?: string): string {
  const parts: string[] = []

  // Who is composing — the AI needs this to write from the right perspective
  if (currentUserName) parts.push(`You are composing as: ${currentUserName}`)

  // Channel/DM name from the header
  const channelName =
    document.querySelector('[data-qa="channel_name"]')?.textContent?.trim() ||
    document.querySelector('.p-view_header__channel_name')?.textContent?.trim() ||
    document.querySelector('[data-qa="channel-header-container"] .c-channel_entity__name')?.textContent?.trim()
  if (channelName) parts.push(`Channel: ${channelName}`)

  // Recent messages (up to 10, oldest first)
  const messageEls = Array.from(
    document.querySelectorAll('[data-qa="message_container"], .c-message_kit__background'),
  ).slice(-10)

  const messages = messageEls.map((el) => {
    const sender =
      el.querySelector('[data-qa="message_sender_name"]')?.textContent?.trim() ||
      el.querySelector('.c-message__sender_button')?.textContent?.trim() ||
      el.querySelector('[data-stringify-type="mention"]')?.textContent?.trim() ||
      'Unknown'
    const text =
      el.querySelector('[data-qa="message-text"]')?.textContent?.trim() ||
      el.querySelector('.c-message_kit__text')?.textContent?.trim() ||
      ''
    if (!text) return null
    // Label the composing user's own prior messages so the AI knows their voice
    const isMe = currentUserName && sender === currentUserName
    return isMe ? `You (${sender}): ${text}` : `${sender}: ${text}`
  }).filter(Boolean)

  if (messages.length > 0) parts.push(`Recent messages:\n${messages.join('\n')}`)

  const context = parts.join('\n\n')
  // RewriteRequestSchema enforces context max(500)
  return context.slice(0, 500)
}

export function replaceSelectedTextInCompose(newText: string, savedRange?: Range | null): boolean {
  const selection = window.getSelection()
  if (!selection) return false

  let range: Range
  if (savedRange) {
    range = savedRange
  } else {
    if (selection.rangeCount === 0) return false
    range = selection.getRangeAt(0)
  }

  const container = range.commonAncestorContainer
  const containerElement =
    container.nodeType === Node.TEXT_NODE
      ? (container as Text).parentElement
      : (container as Element)
  const editor = containerElement?.closest('.ql-editor')

  if (!editor) return false

  range.deleteContents()

  const lines = newText.split('\n')
  const fragment = document.createDocumentFragment()
  let lastTextNode: Text | null = null
  lines.forEach((line, i) => {
    const textNode = document.createTextNode(line)
    fragment.appendChild(textNode)
    lastTextNode = textNode
    if (i < lines.length - 1) fragment.appendChild(document.createElement('br'))
  })
  const firstNode = fragment.firstChild
  range.insertNode(fragment)

  selection.removeAllRanges()
  if (firstNode && lastTextNode) {
    const newRange = document.createRange()
    newRange.setStartBefore(firstNode)
    newRange.setEndAfter(lastTextNode)
    selection.addRange(newRange)
  }

  // Notify Quill that the DOM changed
  editor.dispatchEvent(new Event('input', { bubbles: true }))
  return true
}
