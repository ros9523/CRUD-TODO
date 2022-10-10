const uuid = require ('uuid')

const usersdb=[
    {
        id:'932f73f3-4e23-4a0e-9ca9-648083871852',
        first_name:'Cristiano',
        last_name:'Ronaldo ',
        email:'CR7@gmail.com',
        password:'78910',
        birthday:"1982/05/7"
    },
    {
        id:'d819ce07-ec14-4000-b92d-cfc3b34f957d',
        first_name:'Leonel ',
        last_name:'Messi',
        email:'liopulga@hotmail.com',
        password:'123456',
        birthday:"1980/07/10"
    },
    {
        id:'7b626831-28ee-4d9b-b5c6-b1633d8fb310',
        first_name:'Erling',
        last_name:'Haaland',
        email:'norway_robot@gmail.com',
        password:'456789',
        birthday:"2000/01/9"
    },

];

const getAllUsers = () => {
   return usersdb
}


const getUserById= (id)=>{
    const data =usersdb.find(user=>user.id===id)
    return data
}

const createNewUser=(data)=>{
    const newUserss={
        id: uuid.v4(),
        first_name:data.first_name,
        last_name: data.last_name,
        email: data.email,  
        password: data.password,
        birthday: data.birthday
    }
    usersdb.push(newUserss)
    return newUserss
}

// const updateUserr= (id, title) =>{
//     const data =todoUsers.find(todo=>todo.id===id)
//     data.title=title
//     return data
     
// }
const updateUser= (id, first_name, last_name, email, password, birthday) =>{
    const data =usersdb.find(todo=>todo.id===id)
    data.first_name=first_name;
    data.last_name=last_name;
    data.email=email;
    data.password=password;
    data.birthday=birthday;
    return data
     
}


const deleteUser =(id)=>
{
    const data =usersdb.filter(user=> user.id!=id)
    return data
}


module.exports ={
    getAllUsers,
    getUserById,
    createNewUser,
    deleteUser, 
    updateUser
}









