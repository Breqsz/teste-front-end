// jsdom: emula showModal/close e evento close do <dialog> nos testes
export function applyDialogPolyfill(): void {
  const proto = HTMLDialogElement.prototype

  proto.showModal = function showModal(this: HTMLDialogElement) {
    this.setAttribute('open', '')
  }

  proto.close = function close(this: HTMLDialogElement) {
    if (!this.hasAttribute('open')) return
    this.removeAttribute('open')
    this.dispatchEvent(new Event('close', { bubbles: true }))
  }
}
