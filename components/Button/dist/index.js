
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./button.cjs.production.min.js')
} else {
  module.exports = require('./button.cjs.development.js')
}
