



$(document).ready(function() {

    //verification
    $("#signin").click(function(e){


        var userName = $("#userName").val();
        var password = $("#passWord").val();


        if (userName == "" && password == ""){
            alert ("Please insert Password and Username");
        }
        if (userName != "" && password == ""){
            alert ("Please insert Password");
        }
        if  (userName == "" && password != ""){
            alert ("Please insert Username");
        }
    // return alert("i am here");
        if( userName == admin.email && password == admin.password ){
            $.ajax({
                url:'http://localhost:3000/admin',
                dataType:'json',
                type:'GET',
                // contentType: application/json,
                success: function(response){
                    var msg = "";
                    if(response == 1){
                        window.location = 'admindash.html';
                    }else{
                        msg = "Invalid username and password!";
                        // alert("not here!")
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

    //Mobile Recharge Pin Generator (17 digits)  i.e CREATE
    function mtnPin(){
        return Math.floor(Math.random()*100000000000000000)+1;
    }

    
    // populate the database
    $("#signin").click(function(e){
        
    }
    
    
    
    
    //porpulate table with data i.e READ






    //update validity i.e UPDATE


    //delete table row i.e DELETE



});
