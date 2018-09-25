function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    var users=[
        {
            "id": "123",
            "username": "alice",
            "password": "alice",
            "email": "alice@wonderland.com",
            "firstName": "Alice",
            "lastName": "Wonderland",
            "role": "FACULTY"
        },
        {
            "id": "234",
            "username": "bob",
            "password": "bob",
            "email": "bob@builder.com",
            "firstName": "Bob",
            "lastName": "Builder",
            "role": "STUDENT"
        },
        {
            "id": "345",
            "username": "charly",
            "password": "charly",
            "email": "charly@peanuts.com",
            "firstName": "Charly",
            "lastName": "Brown",
            "role": "STUDENT"
        }
    ]
    var self = this;

    function createUser(user){
        users.push(user);

        return users;

    }

    function findAllUsers(){
        return users
    }


    function findUserById(id) {
        for (i = 0; i < users.length; i++) {

            if (id == users[i].id) {


                var updateuserarray={
                    username: users[i].username,
                    firstName: users[i].firstName,
                    lastName: users[i].lastName,
                    role: users[i].role
                }

            }
        }

        return updateuserarray;
    }
    
    function deleteUser(id) {

        for (i = 0; i < users.length; i++) {

            if(id==users[i].id){
                users.splice(i,1);
            }

        }

        console.log(users);
        
    }
    
    function updateUser(id,user) {
        for (i = 0; i < users.length; i++) {

            if (id == users[i].id) {



                users[i].username = user.username,
                users[i].firstName = user.firstName,
                users[i].lastName = user.lastName,
                users[i].role = user.role



            }



        }
    }
}
