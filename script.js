$(document).ready(function(){
    $("#submitbutton").click(function(){
        var name = $("#name").val();
        var nokp = $("#nokp").val();
        var nomatric = $("#nomatric").val();

        if (!name) {
            alert("Please fill in your name");
        
         } 
         else if (nokp.length !== 12){
            alert("Sila isi nokp dengan 12 number");
          
         }
         else if (nomatric.length !== 12){
            alert("Sila isi nomatric dengan 12 number");
          
         }
         else{
            alert("Are you confirm to submit this form");
           
         }
   
    });
  });

 

