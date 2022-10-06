const uuid = require ('uuid')

const todoUsers=[
    {
        id:'932f73f3-4e23-4a0e-9ca9-648083871852',
        title:"Read 20 minutes Eloquent",
        is_completed:false,
    },
    {
        id:'09ea1eec-a82e-4fd7-9ea3-3e5869d380c5',
        title:"Do workout 1 hours from Monday to friday", 
        is_completed:false,
    },
    {
        id:'fe00c6b9-041e-4a59-84e3-204eb1f72923',
        title:"Read 10 minutes your are too good to be this bad daily",
        is_completed:false,
    }

];

const getAllTodosUsers = () => {
   return todoUsers
}


const getTodoUsersById= (id)=>{
    const data =todoUsers.find(todo=>todo.id===id)
    return data
}

const createTodo =(title)=>{
    const newTodo={
        id: uuid.v4(),
        title, 
        is_completed:false
    }
    todoUsers.push(newTodo)
    return newTodo
}

const updateUserr= (id, title) =>{
    const data =todoUsers.find(todo=>todo.id===id)
    data.title=title
    return data
     
}


const deleteTodo =(id)=>{
    const data =todoUsers.filter(todo=> todo.id!=id)
    return data
}


module.exports ={
    getAllTodosUsers,
    getTodoUsersById,
    createTodo,
    deleteTodo, 
    updateUserr
}









