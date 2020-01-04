const { flatMap } = require("./utils")

function spotlight(middlewares, context) {
  return query => flatMap(m => m(query))(middlewares.map(m => m(context)))
}

module.exports = spotlight
