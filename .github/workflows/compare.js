const path = require('path')
const fs = require('fs')
function naturalSort (a, b) {
  const aPriority = /[a-z]/i.test(a) * 3 + /\d+/i.test(a) * 2
  const bPriority = /[a-z]/i.test(b) * 3 + /\d+/i.test(b) * 2

  if (aPriority === bPriority) return a.toString().localeCompare(b, 'en', { numeric: true })
  return aPriority < bPriority ? 1 : -1
}

const tags = require('./tags.json')
const newTags = {}
Object.entries(tags).sort(naturalSort).forEach(x => { newTags[x[0]] = x[1] })

fs.writeFileSync(path.join('tags.json'), JSON.stringify(newTags, null, 2))
