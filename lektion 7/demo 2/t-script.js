const form = document.querySelector('#demo-form');
const input = document.querySelector('#demo-input');
const results = document.querySelector('#demo-results');

let todos = []

function addTodoItem(inputValue) {
    if (inputValue !== '') {

        let todos = localStorage.getItem('todos').split(',');
        //todos.push(inputValue)

        //console.log(typeof 'todos')

        let todos = localStorage.getItem('todos')
        //todos.push(inputValue)

        localStorage.setItem('todos', todos)
        return;
    }
    alert('du måste ange ett värde')
}


// function addTodoItem(inputValue) {
//     if(inputValue !== '') {
//         return;
//     }
//     alert('du måste ange ett värde')
// }



function getTodoList(todoList) {
    //console.log(todoList)
    console.log(localStorage.getItem('todos'))

}



form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodoItem(input.value);
    form.reset();
    input.focus();

    getTodoList(todos);

})