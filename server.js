function signup(event){
    event.preventDefault();
    alert("working");

    var number=document.getElementById("number").value;
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;

// var a=1;
// var array=[1,2,3];
// var object={a:1};
    if( number && name && email ){
        if(number.length =10 ){

                var swiggy=JSON.parse(localStorage.getItem("user")) || []
                
                var flag =false;

                for(var i=0; i<swiggy.length; i++){
                    if(swiggy[i].unumber== number){
                        flag=true;
                    }
                    

                }
                if(flag==true){
                    alert(" number already exits")
                }
                else{
                    var sdata ={unumber:number,uname:name,uemail:email}
                    swiggy.push(sdata);
                    localStorage.setItem("user",JSON.stringify(swiggy))
                    window.location.href="./login.html"
                }
   }
 }
  
  else{
            console.log("number should be 10 digit")
        }
        else{
            console.log("all field are required")
        }
    }


    function login(event){
        event.preventDefault();
        var lnumber=document.getElementById("lnumber").value;
        
    
        var loginuser={};
    
        // if(lemail && lpassword){
            var swiggyl =JSON.parse(localStorage.getItem("user"));
             var flag =false;
             for(var i=0; i<swiggyl.length; i++){
                if(swiggyl[i].unumber==lnumber){
                    flag=true;
                    loginuser=swiggyl[i];
    
                }
    
             }
             if(flag==true){
                localStorage.setItem("login",JSON.stringify(loginuser))
                alert("login successful");
                window.location.href="./Homepage.html"
             }
             else{
                alert("caredential are match");
             }
    
        }
        
    
    
    
    






    


