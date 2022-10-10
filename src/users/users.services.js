const {getAllUsers, getUserById, createNewUser, deleteUser, updateUser}= require('./users.controllers')

const getUsers=(req, res)=>

{
const data=getAllUsers()
res.status(200).json(data)
};

const getUsersById=(req,res)=>{
    const id= req.params.id
    const data =getUserById(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Invalid ID'})
    }
};

const createNewUsers = (req, res) => {
    const data = req.body

    if(data.first_name && data.last_name && data.email, data.password && data.birthday){
        const userCreation= createNewUser(data)
        res.status(201).json(userCreation)
    } else {
        res.status(400).json({message: 'Missing Data'})
    }
};

const updateUsers=(req,res)=>{
    const id= req.params.id  
    const data= req.body
    const  usersUpdate =updateUser(id,data.first_name, data.last_name, data.email, data.password, data.birthday)
    if(usersUpdate){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Invalid ID'})
    }
}


const deleteUsers=(req,res)=>{
    const id= req.params.id
    const data =deleteUser(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Invalid ID'})
    }
}



module.exports ={
    getUsers, 
    getUsersById, 
    createNewUsers, 
    deleteUsers,
    updateUsers
// }




}


