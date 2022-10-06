const router =require('express').Router()

const usersServices= require ('./users.services')


router.get('/users', usersServices.getTodos)

router.post('/users', usersServices.createNewTask)

router.get('/users/:id', usersServices.getUsersById)

router.put('/users/:id', usersServices.updateUser)

router.delete('/users/:id', usersServices.deleteUser)


module.exports=router