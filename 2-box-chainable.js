// log :: t -> ()
const log = console.log

// Box :: T -> Box T
const Box = x => ({
        map : f => Box(f(x)),
        chain : f => f(x),
        inspect : () => `Box(${x})`
})

// double:: Int -> Int
const double = x => x * 2

// boxedDouble:: Int -> Box Int
const boxedDouble = x => Box(x * 2)

const box = Box(10).map(double).chain(boxedDouble)

log(box)



