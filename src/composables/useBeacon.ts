export default () => {
  return {
    open: () => window.Beacon('open'),
    close: () => window.Beacon('close'),
    toggle: () => window.Beacon('toggle')
  }
}
