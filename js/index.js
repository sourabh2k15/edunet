// this function is to check the validity of the entered scholar

function getuser(){
    var scholar = document.getElementById('scholar').value;
    console.log(scholar);
    if(isNaN(scholar)||scholar==''){
      console.log("The User did not put a scholar number");
      window.location.reload();
    }
    else if(parseInt(scholar)==121114057){
         alert(" (: Welcome Maa :) !!!! \r\n\n(: (: Special logo k liye special entry :) :)");
         window.location.href= 'user.php?Scholar='+scholar;
    }
    else if((121114001<= parseInt(scholar)&&parseInt(scholar)<=121114145)){  // I could have clubbed all the conditions into one else if but wanted
      console.log("An ece senior entered !!");                             // to greet my users specifically according to branch and seniority :).
    }
    else if((131112001<= parseInt(scholar)&&parseInt(scholar)<=131112105)){
      console.log("A cse1 guy entered !!");
      window.location.href= 'user.php?Scholar='+scholar;
    }
    else if((131112201<= parseInt(scholar)&&parseInt(scholar)<=131112300)){
      console.log("A cse2 guy entered !!");
      window.location.href = 'user.php?Scholar='+scholar;
    }
    else if((131114001<= parseInt(scholar)&&parseInt(scholar)<=131114160)){
      console.log("An ece guy entered !!");
      window.location.href = 'user.php?Scholar='+scholar;
    }
    else{
        console.log(scholar+" is not a valid scholar :) ");
        window.location.reload();
    }
}

$(document).ready(function () {
    console.log(" jquery is working !!!");
});


$(document).keypress(function (event) {
    if (event.which == 13) {
        _('login').click();
            console.log('enter key pressed!!!');
        }
});

function _(el) {
    return document.getElementById(el);
}
