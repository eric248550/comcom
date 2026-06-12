export function getSelectedText(): string {
  return window.getSelection()?.toString() ?? ''
}

export function getEmailContext(): string {
  const parts: string[] = []

  // Subject from the compose input (what's being written now)
  const subjectInput = document.querySelector('input[name="subjectbox"]')
  const subject = subjectInput instanceof HTMLInputElement
    ? subjectInput.value.trim()
    : document.querySelector('h2.hP')?.textContent?.trim()
  if (subject) parts.push(`Subject: ${subject}`)

  // Recipients from the compose "To" chips (who we're writing TO)
  // Try display name first (.vT), fall back to email attribute
  const recipientChips = Array.from(document.querySelectorAll('.aoD .vR, .fX .vR'))
  const recipients = recipientChips.map(chip => {
    const name = chip.querySelector('.vT')?.textContent?.trim()
    const email = chip.querySelector('[email]')?.getAttribute('email')
      || chip.querySelector('[data-hovercard-id]')?.getAttribute('data-hovercard-id')
    return name || email || ''
  }).filter(Boolean)
  if (recipients.length > 0) parts.push(`Recipient: ${recipients.join(', ')}`)

  // User's own name from the Google Account button aria-label
  const ariaLabel = document.querySelector('a[aria-label*="Google Account"]')?.getAttribute('aria-label') ?? ''
  const nameLine = ariaLabel.split('\n')[0].replace('Google Account:', '').trim()
  if (nameLine) parts.push(`Sender (me): ${nameLine}`)

  return parts.join('\n')
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
  const containerElement = container.nodeType === Node.TEXT_NODE
    ? (container as Text).parentElement
    : container as Element
  const composeBox = containerElement?.closest('[contenteditable="true"]')

  if (!composeBox) return false

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

  composeBox.dispatchEvent(new Event('input', { bubbles: true }))
  return true
}

export function isInsideGmailCompose(element: Element | null): boolean {
  if (!element) return false
  return !!element.closest('[contenteditable="true"]')?.closest('.aoP, .Am, .aO9')
}

export function getComposeBoxFromSelection(): Element | null {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) return null
  return (
    selection
      .getRangeAt(0)
      .commonAncestorContainer.parentElement?.closest('[contenteditable="true"]') ?? null
  )
}
