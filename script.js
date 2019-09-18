



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
    $("#genPin").click(function(e){
        var a15 = $("#1500").val(); var a10 = $("#1000").val();
        var a75 =  $("#750").val(); var a50 = $("#500").val();
        var a20 = $("#200").val(); var a10 = $("#100").val();
        var n1500 = $("#n1500").text(); var n1000 = $("#n1000").text();
        var n750 = $("#n750").text();   var n500 = $("#n500").text(); 
        var n200 = $("#n200").text();   var n100 = $("#n100").text();
        $.ajax({
            type:'POST',
            url:'http://localhost:3000/posts',
            dataType: 'json',
            success: function(inPut){
                var msg = "";
               let voice = msg.append({"here": "going to word"}) 
               return voice;

               }
        });
        console.log(n500);
        

        
    
})
    
    
    
    
    //porpulate table with data i.e READ






    //update validity i.e UPDATE


    //delete table row i.e DELETE



});
