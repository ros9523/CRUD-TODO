const router =require('express').Router()

const usersServices= require ('./users.services')

router.get('/users', usersServices.getUsers)

router.post('/users', usersServices.createNewUsers)

router.get('/users/:id', usersServices.getUsersById)

router.put('/users/:id', usersServices.updateUsers)

router.delete('/users/:id', usersServices.deleteUsers)


module.exports=router



