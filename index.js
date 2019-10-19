const argv = process.argv[2]

const print = console.log

function retrieveData (name) {
  try {
    const file = require(`./peoples/${name}.js`)
    return file
  } catch(e) {
    console.error(e)
    return 'EMPTY'
  }

}

function retrieveDatamail (mail) {
  try {
    const file = require(`./peoples/${mail}.js`)
    return file
  } catch(e) {
    console.error(e)
    return 'EMPTY'
  }

print(retrieveDatamail(argv))
