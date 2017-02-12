const Task = require('data.task')
const request = require('request')
const R = require('ramda')

// log :: t -> ()
const log = console.log

// logAndReturn :: String -> T -> T
const logAndReturn = tag => value => {
  log(tag, value)
  return value
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

// getPosts :: Url -> Promise JSON Error
const getPostsPromise = url => new Promise((resolve, reject) =>
        request(url, function (error, response, body) {
          if (error) {
            reject(error)
          }
          resolve(JSON.parse(body))
        })
)

log('Promise Started')
getPostsPromise('https://jsonplaceholder.typicode.com/posts/1')
        .then(logAndReturn('initial : '))
        .then(R.prop('body'))
        .then(logAndReturn('body value : '))
        .then(R.toUpper)
        .then(logAndReturn('uppercased task Value : '))
        .catch(log)

log('Promise Ended')
log('-------------------------------------------------------------------------------------')
log('Task Started')

getPosts('https://jsonplaceholder.typicode.com/posts/1')
        .map(logAndReturn('initial : '))
        .map(R.prop('body'))
        .map(logAndReturn('body value : '))
        .map(R.toUpper)
        .fork(log, logAndReturn('uppercased task Value : '))

log('Task Ended')
log('------------------------------------------------------------------------------------')
