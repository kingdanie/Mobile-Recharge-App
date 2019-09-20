$(document).ready(function(){



//Mobile Recharge Pin Generator (17 digits)  i.e CREATE
function mtnPin(){
    return Math.floor(Math.random()*100000000000000000)+1;
}

// var a750 =  $("#750").val(); var a500 = $("#500").val();
//     var a200 = $("#200").val(); var a100 = $("#100").val();
//     
//     var n750 = $("#n750").text();   var n500 = $("#n500").text();
//     var n200 = $("#n200").text();   var n100 = $("#n100").text();
// populate the database Gen 1500
$("#gen1500").click(function(e){
    var a1500 = $("#1500").val();
    var n1500 = $("#n1500").text(); 
    console.log(a1500);
    if(a1500==null||a1500==""||a1500==0){
        alert("You need to input a valid number");
        return;
    }

    for(i=0;i<a1500;i++){
        console.log(a1500);
        let newData = {
            "amount": n1500,
            "pin": mtnPin(),
            "expiry": "12/2020",
        }
        let data500 = $.ajax({
            type:'POST',
            url:'http://localhost:3000/posts',
            dataType: 'json',
            data: newData,
            success: function(data){
                console.log(data);
                RefreshTable();
               }
        });
    }





//end of n1500
})

function RefreshTable() {
   location.reload();
}
// Generate 1000
$("#gen1000").click(function(e){
    var a1000 = $("#1000").val();
    var n1000 = $("#n1000").text();
    if(a1000==null||a1000==""||a1000==0){
        alert("You need to input a valid number");
        return;
    }

    for(i=0;i<a1000;i++){
        console.log(a1000);
        let newData = {
            "amount": n1000,
            "pin": mtnPin(),
            "expiry": "12/2020",
        }
        let data500 = $.ajax({
            type:'POST',
            url:'http://localhost:3000/posts',
            dataType: 'json',
            data: newData,
            success: function(data){
                console.log(data)

               }
        });
    }
//end of n1500
})


// Generate 500
$(".genPin").click(function(e){
    let newData = {
        "amount": n500,
        "pin": mtnPin(),
        "expiry": "12/2020"
    }
    let data500 = $.ajax({
        type:'POST',
        url:'http://localhost:3000/posts',
        dataType: 'json',
        data: newData,
        // success: function(inPut){
        //     console.log(inPut)

        //    }
    });
//end of n500
})

// Generate 200
$(".genPin").click(function(e){
    let newData = {
        "amount": n200,
        "pin": mtnPin(),
        "expiry": "12/2020"
    }
    let data500 = $.ajax({
        type:'POST',
        url:'http://localhost:3000/posts',
        dataType: 'json',
        data: newData,
        // success: function(inPut){
        //     console.log(inPut)

        //    }
    });
//end of n200
})


// Generate 100
$("#genPin").click(function(e){
    let newData = {
        "amount": n100,
        "pin": mtnPin(),
        "expiry": "12/2020"
    }
    let data500 = $.ajax({
        type:'POST',
        url:'http://localhost:3000/posts',
        dataType: 'json',
        data: newData,
        // success: function(inPut){
        //     console.log(inPut)

        //    }
    });
//end of n100
})

$(".productTable").on('click',
'.updateitem',
function() {
    var ispan = $(this).closest("td");
    var keyg = ispan.children("[data-keyg]").data('keyg');
    console.log(keyg);
    update_ajax_rtn(keyg);
});

$(".productTable").on('click',
'.deleteitem',
function() {
    var ispan = $(this).closest("td");
    var keyg = ispan.children("[data-keyg]").data('keyg');
    console.log(keyg);
    delete_ajax_rtn(keyg);
    location.reload();
});

function update_ajax_rtn(keyg) {

    if (isNaN(keyg)) {
        keyg = keyg.replace(/&/g, "[]");
    }
    var amount = "";
    var pin = "";
    let newData = {
        "amount": amount,
        "pin": pin,
        "expiry": "12/2030"
    }
    let data500 = $.ajax({
        type:'GET',
        url:'http://localhost:3000/posts/'+keyg,
        success: function(result){
            newData.amount = result.amount;
            newData.pin = result.pin;
            $.ajax({
                type:'PUT',
                url:'http://localhost:3000/posts/'+keyg,
                dataType: 'json',
                data: newData,
                success: function(result){
                    console.log(result)
                    location.reload();
                   }
             });
           },
     });
}


function delete_ajax_rtn(keyg) {

    if (isNaN(keyg)) {
        keyg = keyg.replace(/&/g, "[]");
    }
    let data500 = $.ajax({
        type:'DELETE',
        url:'http://localhost:3000/posts/'+keyg,
        success: function(result){
            console.log(result)

           }
    });
}


//end of code
})