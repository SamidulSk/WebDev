// create map for store user information and allow adding, updating and deleting user records
 const userMap= new Map();

 //add function
 function addUser(name,age,email){
    const Info2={age,email};
    userMap.set(name,Info2);
 }
 //update function
 function UpdateUser(name,age,email){
    if(userMap.has(name)){
        const Info2=userMap.get(name);
        Info2.age=age;
        Info2.email=email;
    }
 }
 //delete function
 function deleteUser(name){
    userMap.delete(name)
 }

 // call all functions
 addUser("samidul",20,"marsamidul2002@gmail.com");
 addUser("susovon",21,"myselfsuso@gmail.com");
 addUser("gangaram",22,"mrganga2001@gmail.com")
 console.log(userMap)

 UpdateUser("gangaram",22,"gangahere@gmail.com")
 console.log(userMap)

 deleteUser("susovon")
 console.log(userMap)

//  output::
//  Map(3) {
//     'samidul' => { age: 20, email: 'marsamidul2002@gmail.com' },
//     'susovon' => { age: 21, email: 'myselfsuso@gmail.com' },
//     'gangaram' => { age: 22, email: 'mrganga2001@gmail.com' }
//   }
//   Map(3) {
//     'samidul' => { age: 20, email: 'marsamidul2002@gmail.com' },
//     'susovon' => { age: 21, email: 'myselfsuso@gmail.com' },
//     'gangaram' => { age: 22, email: 'gangahere@gmail.com' }
//   }
//   Map(2) {
//     'samidul' => { age: 20, email: 'marsamidul2002@gmail.com' },
//     'gangaram' => { age: 22, email: 'gangahere@gmail.com' }
//   }