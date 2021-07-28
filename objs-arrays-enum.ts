// const person: {
//     name: string,
//     age: number
// // } = {
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Mike',
//     age: 28,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Mike',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// person.role.push('fdas')
// person.role[1] = 1
 
let favoriteActivities: string[]
favoriteActivities = ['Sports'], 321, { name: 'fdsfa', age: 213}

console.log(favoriteActivities)

console.log(person.name)

for (const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase())
}

console.log(Role.ADMIN)

if(person.role === Role.ADMIN){
    console.log('is admin')
}