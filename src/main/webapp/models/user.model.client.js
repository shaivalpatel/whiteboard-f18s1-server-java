function User(username, password, firstName, lastName,phone, role, email,dateOfBirth) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.dateOfBirth=dateOfBirth;
    // ...same for rest of properties…

    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setPassword = setPassword;
    this.getPassword = getPassword;
    this.getFirstname=getFirstname;
    this.setFirstname=setFirstname;
    this.getLastname=getLastname;
    this.setLastname=setLastname;
    this.getEmail=getEmail;
    this.setEmail=setEmail;
    this.getPhone=getPhone;
    this.setPhone=setPhone;
    this.setRole=setRole;
    this.getRole=getRole;
    this.getDateofbirth=getDateofbirth
    this.setDateofbirth=setDateofbirth


    // ...same for rest of properties…

    function setUsername(username) {
        this.username = username;
    }
    function getUsername() {
        return this.username;
    }
    function setPassword(password) {
        this.password = password;
    }
    function getPassword() {
        return this.password
    }

    function setFirstname(firstName) {
        this.firstName =firstName;
    }
    function getFirstname() {
        return this.firstName}

    function setLastname(lastName) {
        this.lastName =lastName;
    }

    function getLastname() {
        return this.lastName
    }

    function setPhone(phone) {
        this.phone =phone;
    }

    function getPhone() {
        return this.phone
    }

    function setEmail(email) {
        this.email =email;
    }

    function getEmail() {
        return this.email
    }
    function setRole(role) {
        this.role=role;
    }


    function getRole() {
        return this.role
    }

    function setDateofbirth(dateOfBirth) {
        this.dateOfBirth=dateOfBirth;
    }

    function getDateofbirth() {
        return this.dateOfBirth;
    }



    // ...same for rest of properties…
}
