# iChat Backend API

###### This is an Express NodeJS App that allows iChat to create new users that have the capability login, allowing the ability to create chat channels, send messages to other users within a channel and the ability to invite friends.

*Objectives*

- This API exposes EndPoints for the iChat frontend to consume
- It performs CRUD operations on 4 models, User, Channel, Friend and Chat
- Persists data to a Mongo Database
- Uses socket.io to allow realtime exchange of data i.e chat messages between client and the server
- Implements middleware for authenticating EndPoints and validation of parameters sent to the API 
  
# Usage

*Send requests to the below given EndPoints and consume the json response*

### Routes

## localhost:5000/api/users
*PUT Request*
- This is a public route that is used to create a new user account
- Params required are given below
1. user_name
2. email_address
3. password
4. first_name
5. last_name
6. phone_number

*GET Request*
- This is a protected route that lists all friends of current logged in user

## localhost:5000/api/users/:user_id
*POST Request*
- This is a protected route that is used to update a selected user properties which can be 
1. phone_number
2. email_address
3. password
4. avatar
5. bio
6. skills

*DELETE Request*
- This is a protected route that is used to delete a selected user account


## localhost:5000/api/friends/:friend_id
*POST Request*
- This is a protected route that is used to update a selected friend properties which can be 
1. relationship
2. channel_id
3. avatar

