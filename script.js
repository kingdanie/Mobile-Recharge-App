



$(document).ready(function() {

    //verification
    $("#signin").click(function(e){


        var userName = $("#userName").val();
        var password = $("#passWord").val();

    // return alert("i am here");
        if( userName != "" && password != "" ){
            $.ajax({
                url:'http://localhost:3000/admin',
                dataType:'json',
                type:'POST',
                // contentType: application/json,
                success: function(response){
                    var msg = "";
                    if(response == 1){
                        window.location = 'admindash.html';
                    }else{
                        msg = "Invalid username and password!";
                        alert("not here!")
                    }
                    // alert("what is going on here")
                },
                error: function () {
                    alert('Incorrect Username or Password!');
                   }
            });
        }
        e.preventDefault();
    });

    //Recharge Pin 
function mtnPin(){
    return Math.floor(Math.random()*100000000000000000)+1;
}

});
