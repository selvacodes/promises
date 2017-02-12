// double  :: Int -> Int
const double = x => x * 2

// log :: T -> ()
const log = console.log

// Box :: T -> Box T
const Box = x => ({
        map : f => Box(f(x)),
        chain : f => f(x),
        inspect : () => `Box(${x})`
})

const box = Box(10).map(double)
log(box)

// const arr = [10,20,30].map(double)
const arr = Array.of(10,20,30).map(double)
log(arr)

