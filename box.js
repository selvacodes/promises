const double = x => x * 2
const Box = x => ({
        map : f => Box(f(x)),
        inspect : () => `Box(${x})`
})


const box = Box(10).map(double)
console.log(box)


const  arr = [1,2,3]
console.log(arr.map(double))

