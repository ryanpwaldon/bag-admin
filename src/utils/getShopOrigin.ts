export default () => new URLSearchParams(window.location.search).get('shop') || null
