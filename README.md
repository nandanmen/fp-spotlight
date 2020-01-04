# Spotlight

A recreation of the MacOS Spotlight search feature using functional principles.

## API

```js
import { spotlight } from "spotlight"
import { string } from "spotlight/middlewares"

const middleware = [string]
const context = ["apple", "orange", "melon", "watermelon"]
const getResults = spotlight(middleware, context)

console.log(getResults("melon OR apple")) // ["melon", "watermelon", "apple"]
```

```ts
type Middleware = (context: any[]) => (query: string) => Result[]
type GetResultFn = (query: string) => Result[]

interface Result {
    score: number
    value: any
}

function spotlight(middleware: Middleware[], context: string): GetResultFn {}
```