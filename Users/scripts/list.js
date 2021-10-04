function displayUsers(users){
    for(var i=0;i<users.length; i++){
        let user = users[i];
        let syntax=`
        <tr>
            <td>${user.email}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.payment}</td>
            <td style="background=color:${user.color}:width:50px:"></td>
        </tr>
        `;
        $("#tableUsers").append(syntax);
    }
}

function init(){
    console.log("Listing users");
    var users = readUsers();
    displayUsers(users);
    $("#btnClear").click(function(){
        clearUsers();
        location.reload();
    });
}
window.onload = init;