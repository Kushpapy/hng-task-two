GET localhost:3000/api -> Fetch user with names
POST localhost:3000/api -> Create and store a new username in the json format with the variable name and the value must only be a string else it returns the message "something went wrong".
PATCH localhost:3000/api/:id -> Updates a user name that matches the :id provided in the json format with the variable newName and the value must only be a string else it returns the message "something went wrong".
DELETE localhost:3000/api/:id -> Deletes a user name that matches the :id provided.