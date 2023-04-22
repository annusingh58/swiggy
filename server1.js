function signup(event){
 event.preventDefault()
//  alert("working");



var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var confirmpassword=document.getElementById("confirmpassword").value;

if(name && email && password && confirmpassword){
    if(password==confirmpassword){
        if(password.length>=8 && confirmpassword.length>=8){
            var tanishq=JSON.parse(localStorage.getItem("tuser")) ||[]
            var flag=false;
            for(i=0;i>tanishq.lenth;i++){
                if(tanishq[i].uemail=email){
                    flag=true;
               }
            }
            if(flag==true){
                alert("email are exits ")

            }
            else{
                var tdata={uname:name, uemail:email, upassword:password, uconfirmpassword:confirmpassword}
                tanishq.push(tdata);
                localStorage.setItem("tuser", JSON.stringify(tanishq));
                window.location.href="./new.html"

            }
           

            




        }
        else{
            console.log("password should be 8 digit")
        }

   
   
    }
    else{
        console.log("password not match");

    }



}
else{
    alert("all field are required");
}





}
