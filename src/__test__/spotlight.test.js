const spotlight = require("../")

const cases = [
  [
    "should work with one middleware",
    [() => () => ["hello world!"]],
    [],
    "",
    ["hello world!"]
  ],
  [
    "should return flattened array with multiple middlewares",
    [() => () => ["first middleware"], () => () => ["second middleware"]],
    [],
    "",
    ["first middleware", "second middleware"]
  ]
]

describe("basic test", () => {
  for (const test of cases) {
    const [message, middlewares, context, query, expected] = test
    it(message, () => {
      const getResult = spotlight(middlewares, context)
      expect(getResult(query)).toEqual(expected)
    })
  }
})
