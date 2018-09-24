
(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $selectBtn, $updateBtn, $createBtn, $searchBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();

    var userArray = [];


    $(main);
    function main(){
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $createBtn = $('#createBtn');
        $updateBtn= $('#updateBtn');
        $searchBtn = $(".wbdv-search");

        $createBtn.click(createUser);
        $updateBtn.click(updateUser);
        $searchBtn.click(findUserByUsername);
        $userRowTemplate= $(".wbdv-template");

        $tbody = $(".wbdv-tbody");

        findAllUsers();
    }


    function createUser() {

        var username = $usernameFld.val();
        $usernameFld.val("");

        var firstname = $firstNameFld.val();
        $firstNameFld.val("");

        var lastname = $lastNameFld.val();
        $lastNameFld.val("");

        var user = {
          username: username,
          firstname: firstname,
          lastname: lastname
        };

        userArray.push(user);

        console.log(userArray);



        var timestamp= (new Date()).getTime();
        var newuser = $userRowTemplate.clone();
        newuser.attr("id", timestamp)
            .find(".wbdv-username")
            .html(username);
        newuser.find(".wbdv-first-name")
            .html(firstname);
        newuser.find('.wbdv-last-name')
            .html(lastname);
        newuser.find(".wbdv-remove")
            .click(deleteUser);
        newuser.find('wbdv-edit')
            .click(findUserById);
        $tbody.append(newuser);



    }
    function findAllUsers() {
        var u = userService
            .findAllUsers();

        renderUsers(u);


    }

    function findUserByUsername() {

    }

    function findUserById(event) {
        







    }
    function deleteUser(event) {
        var button=$(event.currentTarget);
        var tr = button.parents(".wbdv-template");
        tr.remove();
    }
    function selectUser() { }
    function updateUser(nid) {
        console.log(nid);




    }
    function renderUser(user) { }
    function renderUsers(users) {
        $tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var timestamp= (new Date()).getTime();
            var newuser = $userRowTemplate.clone();
            newuser.attr('id', timestamp);
            newuser.find('.wbdv-username')
                .html(user.username);
            newuser.find('.wbdv-first-name')
                .html(user.firstName);
            newuser.find('.wbdv-last-name')
                .html(user.lastName);
            newuser.find('.wbdv-role')
                .html(user.role);
            newuser.find('.wbdv-remove').click(deleteUser);
            newuser.find('.wbdv-edit')
                .click(findUserById);
            $tbody.append(newuser);

        }
    }

})();
