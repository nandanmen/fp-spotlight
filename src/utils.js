const flatMap = f => xs => xs.map(f).reduce(concat, [])

const concat = (xs, ys) => xs.concat(ys)

module.exports = { flatMap }
