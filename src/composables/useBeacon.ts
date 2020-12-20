export default () => {
  return {
    open: () => (window as any).Beacon('open'),
    close: () => (window as any).Beacon('close')
  }
}
