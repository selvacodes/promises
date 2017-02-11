const Task = require('data.task')
const fetch = require('node-fetch')
const R = require('ramda')


const Box = x => ({
        map : f => Box(f(x)),
        chain : f => f(x),
        inspect : () => `Box(${x})`
})

const getPosts = url => new Task((reject,resolve) =>
 fetch(url).then(res => res.json())
           .then(resolve)
           .catch(reject)
)

// https://jsonplaceholder.typicode.com/posts

const box = Box({body:"test"})
        .map(R.tap(console.log))
        .map(R.prop('body'))
        .map(R.tap(console.log))
        .map(R.toUpper)
        .map(R.tap(console.log))

getPosts('https://jsonplaceholder.typicode.com/posts/1')
        .map(R.tap(console.log))
        .map(R.prop('body'))
        .map(R.tap(console.log))
        .map(R.toUpper)
        .fork(console.log,console.log)


