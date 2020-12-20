export default () => {
  return {
    open: () => (window as any).Beacon('open'),
    close: () => (window as any).Beacon('close'),
    toggle: () => (window as any).Beacon('toggle')
  }
}
