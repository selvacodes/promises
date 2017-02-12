const Task = require('data.task')
const request = require('request')
const R = require('ramda')

// Utils
// log :: t -> ()
const log = console.log

// logAndReturn :: String -> T -> T
const logAndReturn = tag => value => {
       log(tag,value)
       return value
}

// Box :: T -> Box T
const Box = x => ({
        map : f => Box(f(x)),
        chain : f => f(x),
        inspect : () => `Box(${x})`
})

const post = {
        id : 1,
        title:"post title",
        body :"post body"
}

// getPosts :: Url -> Task Error JSON
const getPosts = url => new Task((reject, resolve) =>
        request(url, function (error, response, body) {
          if (error) {
            reject(error)
          }
          resolve(JSON.parse(body))
        })
)

log('Box Started')
const box = Box(post)
        .map(logAndReturn("initial : "))
        .map(R.prop('body'))
        .map(logAndReturn("body value : "))
        .map(R.toUpper)
        .map(logAndReturn("uppercased :"))

log('Box Ended')
log('-------------------------------------------------------------------------------------')
log('Task Started')

// https://jsonplaceholder.typicode.com/posts
getPosts('https://jsonplaceholder.typicode.com/posts/1')
        .map(logAndReturn("initial : "))
        .map(R.prop('body'))
        .map(logAndReturn("body value : "))
        .map(R.toUpper)
        .fork(log,logAndReturn("uppercased task Value : "))

log('Task Ended')
log('-------------------------------------------------------------------------------------')
