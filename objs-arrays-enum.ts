// const person = {
//     name: 'Mike',
//     age: 28,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

enum Role {ADMIN, READ_ONLY, AUTHOR}
var a: number

const person = {
    name: 'Mike',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// person1.role.push('fdas')
// person1.role[1] = {}
 
let favoriteActivities: string[]
favoriteActivities = ['Sports'], 321, { name: 'fdsfa', age: 213}

console.log(favoriteActivities)

console.log(person.name)

for (const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase())
}

console.log(Role[Role.ADMIN])

if(person.role === Role.ADMIN){
    console.log('is admin')
}