export default () => {
  return {
    openBeacon: () => window.Beacon('open'),
    closeBeacon: () => window.Beacon('close'),
    toggleBeacon: () => window.Beacon('toggle')
  }
}
