const {getAllTodosUsers, getTodoUsersById, updateUserr, createTodo, deleteTodo}= require('./users.controllers')

const getTodos=(req, res)=>
{
const data=getAllTodosUsers()
res.status(200).json(data)
}

const getUsersById=(req,res)=>{
    const id= req.params.id
    const data =getTodoUsersById(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Invalid ID'})
    }
}

const createNewTask = (req, res) => {
    const { title } = req.body

    if(title){
        const data = createTodo(title)
        res.status(201).json(data)
    } else {
        res.status(400).json({message: 'Missing Data'})
    }
}

const updateUser=(req,res)=>{
    const id= req.params.id  
    const { title } = req.body
    const data =updateUserr(id,title)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Invalid ID'})
    }
}


const deleteUser=(req,res)=>{
    const id= req.params.id
    const data =deleteTodo(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Invalid ID'})
    }
}



module.exports ={
    getTodos, 
    getUsersById, 
    createNewTask, 
    deleteUser,
    updateUser
}







