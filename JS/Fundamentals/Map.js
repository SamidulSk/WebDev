let map=new Map()
console.log(map)
map.set('1','hello')
map.set(1,'hello')
map.set(true,'brother')
console.log(map)

console.log(map.get(1))
console.log(map.get(true))

let user ={name:'samidul'}
let visitMap=new Map();  // user object as key
visitMap.set(user,100)
console.log(visitMap)

//iteration
let items = new Map(
    [
        ['tomatoes',100],
        ['onion',400],
        ['potatoes',500]
    ]
)

console.log(items.keys())
for(let i of items.keys()){
    console.log(i)
}

//map from object
let user2={
    name:"sk",
    age:23
}

console.log(Object.entries(user2))
let map2=new Map(Object.entries(user2),33)
console.log(map2)

//map to object
let obj=Object.fromEntries(map.entries())
console.log(obj)