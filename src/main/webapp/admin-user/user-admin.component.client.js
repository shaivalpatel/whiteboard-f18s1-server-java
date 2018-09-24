
(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $selectBtn, $updateBtn, $createBtn, $searchBtn;
    var $firstNameFld, $lastNameFld,$roleFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();

    var userArray = [];

    var ji;
    $(main);
    function main(){
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $createBtn = $('#createBtn');
        $updateBtn= $('#updateBtn');
        $searchBtn = $(".wbdv-search");
        $roleFld =$("#roleFld");
        $createBtn.click(createUser);


        $userRowTemplate= $(".wbdv-template");

        $tbody = $(".wbdv-tbody");

        findAllUsers();
    }


    function createUser() {
        var timestamp= (new Date()).getTime();
        var username = $usernameFld.val();
        $usernameFld.val("");

        var firstname = $firstNameFld.val();
        $firstNameFld.val("");

        var lastname = $lastNameFld.val();
        $lastNameFld.val("");

        var role = $roleFld.val();

        var user = {
            id: timestamp,
          username: username,
          firstName: firstname,
          lastName: lastname,
            role: role
        };

        userArray.push(user);

        console.log(userArray);




        renderUsers(userArray);



    }
    function findAllUsers() {
        var u = userService
            .findAllUsers();
        for (n=0;n<u.length;n++){
            userArray.push(u[n]);
        }
        renderUsers(userArray);


    }

    function findUserById(event) {
        var n = $(event.currentTarget);
        var t = n.parents(".wbdv-template");

        ji = t.attr("id");
        console.log(ji);
        for (i = 0; i < userArray.length; i++) {

            if (ji == userArray[i].id) {
                console.log(userArray[i]);

                var updateuserarray={
                    username: userArray[i].username,
                    firstName: userArray[i].firstName,
                    lastName: userArray[i].lastName,
                    role: userArray[i].role
                }

            }
        }
        $updateBtn= $('#updateBtn');
        console.log(updateuserarray);
        renderUser(updateuserarray);


        /*var uusername = $("#"+i).children(".wbdv-username").html();
        var ufname = $("#"+i).children(".wbdv-first-name").html();
        var ulname = $("#"+i).children(".wbdv-last-name").html();
        var urole = $("#"+i).children(".wbdv-role").html();
*/











    }
    function deleteUser(event) {
        var button=$(event.currentTarget);
        var tr = button.parents(".wbdv-template");
        tr.remove();
    }
    function selectUser() { }
    function updateUser() {
        console.log(userArray);
        for (i = 0; i < userArray.length; i++) {

            if (ji == userArray[i].id) {
                console.log(userArray[i]);
                console.log($usernameFld)
                userArray[i].username = $usernameFld.val();
                userArray[i].firstName = $firstNameFld.val();
                userArray[i].lastName = $lastNameFld.val();
                userArray[i].role = $roleFld.val();
                console.log(userArray[i])

            }
            renderUsers(userArray);


        }

    }


    function renderUser(user) {

        var newu=user;
        console.log(newu);
        var updateform = $(".wbdv-form");
        var uu= $(".wbdv-form").clone();

        uu.find("#usernameFld").val(newu.username);
        uu.find("#firstNameFld").val(newu.firstName);
        uu.find("#lastNameFld").val(newu.lastName);
        uu.find("#roleFld").val(newu.role);
        uu.find("#updateBtn").click(updateUser);
        uu.find('createBtn').click(createUser());


        $thead = $("thead");

        updateform.remove();

        $thead.append(uu)
        $usernameFld = $("#usernameFld")
        console.log($usernameFld);

        $passwordFld = $('#passwordFld');
        $firstNameFld = $("#firstNameFld")
        $lastNameFld =$("#lastNameFld")

    }
    function renderUsers(users) {
        $tbody.empty();

        for(var i=0; i<users.length; i++) {

            console.log();
            var user = users[i];





            var newuser = $userRowTemplate.clone();
            newuser.attr('id', user.id);
            newuser.find('.wbdv-username')
                .html(user.username);
            newuser.find('.wbdv-first-name')
                .html(user.firstName);
            newuser.find('.wbdv-last-name')
                .html(user.lastName);
            newuser.find('.wbdv-role')
                .html(user.role);
            newuser.find('.wbdv-remove')
                .click(deleteUser);
            newuser.find('.wbdv-edit')
                .click(findUserById);
            $tbody.append(newuser);

        }
        
    }

})();
