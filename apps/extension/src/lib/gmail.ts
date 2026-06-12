export function getSelectedText(): string {
  return window.getSelection()?.toString() ?? ''
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
  const textNode = document.createTextNode(newText)
  range.insertNode(textNode)

  selection.removeAllRanges()
  const newRange = document.createRange()
  newRange.selectNodeContents(textNode)
  selection.addRange(newRange)

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
