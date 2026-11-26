const destination = new URL('https://landinvest.co.il/')
const prefix = '/landinvest-catalog/'
if (location.pathname.startsWith(prefix)) {
  destination.pathname = location.pathname.slice(prefix.length)
}
destination.search = location.search
destination.hash = location.hash
location.replace(destination.href)
