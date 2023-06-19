
import { useState } from "react";
import Section from "./section";
const App=()=>{
    let [fulname,SetFulname]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [conpass,setConpass]=useState("");
    let [error,setError]=useState("");
    let [success,setSuccess]=useState("");
    function signup(event){
        event.preventDefault()
        if(!fulname.trim().includes(" ")){
           setError("Full Name requires");
           
        }
        else if(!email.trim().includes("@") && !email.trim().includes(".")){
            setError("email not found");
         }
         else if(password.trim()!==conpass.trim()){
            setError("Password does not match with confirm password");
         } 
         else{
               setError('')
               setSuccess("SignUp Success!!");
           
        }
    }


    return (
        <div>
            <Section>
        <form >
            <h1>SignUp</h1>
            <input type="text" placeholder="Full name" onChange={(event)=>{SetFulname(event.target.value)}}/>
            <input type="text" placeholder="Email"  onChange={(event)=>{setEmail(event.target.value)}}/>
            <input type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} />
            <input type="password" placeholder="Confirm Password"  onChange={(event)=>{setConpass(event.target.value)}}/>
            <div>
            {
                (error)&&(
                    <p style={{color:'red'}} >Error : {error}</p>
                   ) }
                   <div>
                    {
                   (success)&&(
                    <p style={{color:'red'}} >{success}</p>
                   ) 
}</div>
            

        </div>
            <button onClick={signup}>SignUp</button>
        </form>
       
        </Section>

    </div>
    )
}

export default App;