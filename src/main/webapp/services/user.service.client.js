function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;

    var self = this;

    function createUser(){

    }

    function findAllUsers(){
        return [
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
    }


    function findUserById() {
        
    }
    
    function deleteUser() {
        
    }
    
    function updateUser() {}
}
