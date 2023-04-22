function signup(event){
    event.preventDefault();
    // alert("working");

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confimpassword=document.getElementById("confimpassword").value;

// var a=1;
// var array=[1,2,3];
// var object={a:1};
    if(  name && email && password && confimpassword ){
        if( password.length >=8 && confimpassword.length>=8){
          if(password==confimpassword){
            var swiggy=JSON.parse(localStorage.getItem("suser")) ||[]  //swiggy is defined as an array
            var flag=false;
            
            for(var i=0;i>swiggy.length;i++){
               if(swiggy[i].uemail=email){
                   flag=true;

               }
            }
            if(flag==true){
                alert("email already exits");
            }
            else{
                console.log("suscessfully");
                var sdata={uname:name,uemail:email,upassword:password,uconfirmpassword:confimpassword}
                swiggy.push(sdata);
                localStorage.setItem("suser",JSON.stringify(swiggy))
                window.location.href="./login.html"

            }
            


          }
          else{
            console.log("password not match")
          }


              
       
    }
    else{
        console.log("passwowrd should be 8 digit")
    }
   }
     else{
           console.log("all field are required")
     }
    }



    function login(event){
        event.preventDefault();
        // alert("working");


        var lemail=document.getElementById("lemail").value;
        var lpassword=document.getElementById("lpassword").value;

        var loginuser={};
        if(lemail && lpassword){
            var swiggyl=JSON.parse(localStorage.getItem("suser"))
            var flag =false;
            for(var i=0;i<swiggyl.length;i++){
                if(swiggyl[i].uemail==lemail){
                    flag=true;
                    loginuser=swiggyl[i];
                }

               
            }
                 if( flag==true){
                    localStorage.setItem("slogin",JSON.stringify(loginuser))
                    alert("login successfull")
                    window.location.href="./swiggyhome.html"
                    

            }
            


            else{
                alert("caredential are match")
            }


        }
        else{
            alert("all field are required")
        }

    }

      
    
        
        
    
    
    
    






    


