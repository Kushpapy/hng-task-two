const User = require("../models/users.models")

async function getAllUsers(req, res, next){
    let users;
    try {
         users = await User.getAllUsers();
    } catch (error) {
        return next(error)
    }


    res.json({
        users: users
    });
}


async function addUsers(req, res, next){
    const userName = req.body.name;

    if (typeof userName !== "string"){
        return next(new Error("The name property must be a string"))
    }

    const user = new User(userName);

    let insertedId;
    try {
    const result = await user.save();
    insertedId = result.insertedId
    } catch (error) {
        return next
    }


    user.id = insertedId.toString();

    res.json({
        message: "added user succesfully!",
        createdUser : user
    })
}


async function updateUsers(req, res, next){
    const userId = req.params.id;
    const newUserName = req.body.newName;

    if (typeof newUserName !== "string"){
        return next(new Error("The name property must be a string"));
    }

    const user = new User(newUserName, userId);

    try {
     await  user.save()
    } catch (error) {
        return next(error)
    }    

    res.json({
       message: "User updated",
       updatedUser: user 
    })
}


async function deleteUsers(req, res, next){
    const userId = req.params.id;
    

    const user = new User(null, userId);

    try {
     await  user.delete()
    } catch (error) {
        return next(error)
    }    

    res.json({
       message: "User deleted"
    })
}


module.exports = {
    getAllUsers:getAllUsers,
    addUsers:addUsers,
    updateUsers: updateUsers,
    deleteUsers:deleteUsers
}