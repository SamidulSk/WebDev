//fetch data from api
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(function f(response){
    return response.json();
})
.then(function f(value){
    console.log(value)
})

//outpur: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }