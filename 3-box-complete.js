const R = require('ramda')
// Utils
// log :: T -> ()
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

// const postArray = [post,post]
const postArray = Array.of(post,post)

log("Post",post)

log("Post Array",postArray)

log('Box Started')
const box = Box(post)
        .map(logAndReturn("initial : "))
        .map(R.prop('body'))
        .map(logAndReturn("body value : "))
        .map(R.toUpper)
        .map(logAndReturn("uppercased :"))

log("BOX" , box)
log('Box Ended')
log('-------------------------------------------------------------------------------------')
log('Array Started')

const arrayposts = Array.of(post,post)
        .map(logAndReturn("initial : "))
        .map(R.prop('body'))
        .map(logAndReturn("body value : "))
        .map(R.toUpper)
        .map(logAndReturn("uppercased :"))

log("Array",arrayposts)
log('Array Ended')
log('-------------------------------------------------------------------------------------')

