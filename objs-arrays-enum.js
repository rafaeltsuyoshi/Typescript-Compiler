"use strict";
// const person = {
//     name: 'Mike',
//     age: 28,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var a;
var person = {
    name: 'Mike',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person1.role.push('fdas')
// person1.role[1] = {}
var favoriteActivities;
favoriteActivities = ['Sports'], 321, { name: 'fdsfa', age: 213 };
console.log(favoriteActivities);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
console.log(Role[Role.ADMIN]);
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
