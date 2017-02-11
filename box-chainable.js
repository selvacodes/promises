const Box = x => ({
        map : f => Box(f(x)),
        chain : f => f(x),
        inspect : () => `Box(${x})`
})

const double = x => x * 2
const boxedDouble = x => Box(x * 2)

const box = Box(10).map(double).chain(boxedDouble)
console.log(box)


const  arr = [1,2,3]
console.log(arr.map(double))

