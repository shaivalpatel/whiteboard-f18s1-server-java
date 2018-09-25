
(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $selectBtn, $updateBtn, $createBtn, $searchBtn;
    var $firstNameFld, $lastNameFld,$roleFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
var formclone
    var searchUsers =[];
    var userArray = [];

    var ji;
    $(main);
    function main(){
        formclone=$(".wbdv-form").clone();
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $createBtn = $('#createBtn');
        $updateBtn= $('#updateBtn');
        $searchBtn = $(".wbdv-search");
        $roleFld =$("#roleFld");
        $createBtn.click(createUser);
        $searchBtn.click(selectUser);
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

        userService.createUser(user);
        findAllUsers();

        $thead2 =$("thead");
        var removeform = $(".wbdv-form");
        removeform.remove();
        $thead2.append(formclone);




    }
    function findAllUsers() {
        var u = userService
            .findAllUsers();
        userArray=[]
        for (n=0;n<u.length;n++){
            userArray.push(u[n]);
        }
        renderUsers(userArray);


    }

    function findUserById(event) {

        var n = $(event.currentTarget);
        var t = n.parents(".wbdv-template");

        ji = t.attr("id");
        var updateuserarray= userService.findUserById(ji);
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
        ids=(tr.attr("id"));
        userService.deleteUser(ids);
        findAllUsers();

    }
    function selectUser() {
        $usernameFld = $("#usernameFld")
        $passwordFld = $('#passwordFld');
        $firstNameFld = $("#firstNameFld")
        $lastNameFld =$("#lastNameFld");
        $roleFld =$("#roleFld");

        searchUsers=[]
        for (i=0; i<userArray.length;i++){
            var suser=userArray[i];

            if ($usernameFld.val()==suser.username
                || $firstNameFld.val()== suser.firstName
                || $lastNameFld.val()==suser.lastName
                || $roleFld.val() == suser.role
                || ((" "+suser.username).indexOf($usernameFld.val())>0)
                || ((" "+suser.firstName).indexOf($firstNameFld.val())>0)
                ||((" "+suser.lastName).indexOf($lastNameFld.val())>0)){

                searchUsers.push(suser)

            }

        }


        renderUsers(searchUsers);



    }
    function updateUser() {

        var updateuser={
            username :$usernameFld.val(),
            firstName : $firstNameFld.val(),
            lastName : $lastNameFld.val(),
            role : $roleFld.val()

        }
        userService.updateUser(ji,updateuser)
        findAllUsers();

        $usernameFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        $roleFld.val("");
        $thead1 =$("thead");
        var removeform = $(".wbdv-form");
        removeform.remove();
        $thead1.append(formclone);



    }


    function renderUser(user) {

        var newu=user;

        var updateform = $(".wbdv-form");
        var uu= $(".wbdv-form").clone();

        uu.find("#usernameFld").val(newu.username);
        uu.find("#firstNameFld").val(newu.firstName);
        uu.find("#lastNameFld").val(newu.lastName);
        uu.find("#roleFld").val(newu.role);
        uu.find("#updateBtn").click(updateUser);
        uu.find('#createBtn').click(createUser);


        $thead = $("thead");

        updateform.remove();

        $thead.append(uu)
        $usernameFld = $("#usernameFld")
        $passwordFld = $('#passwordFld');
        $firstNameFld = $("#firstNameFld")
        $lastNameFld =$("#lastNameFld")

    }
    function renderUsers(users) {
        $tbody.empty();

        for(var i=0; i<users.length; i++) {


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
