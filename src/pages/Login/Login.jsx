import { useState } from "react";
import logo from "../../assets/logo.png"
import { login, signup } from "../../firebase";

const Login = () => {

    const [signInState, setSignInState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user_auth = async (e)=> {
        if(signInState==="Sign In") {
            await login(email, password);
        } else {
            await signup(name, email, password);
        }
    }


    return (
        <div className="h-[100vh] bg-img  py-[20px] px-[8%] ">
            <img className="w-[150px]" src={logo} alt="" />
            <div className="w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-sm p-[60px] m-auto">
                <h1 className="text-[32px] font-[500] mb-7 ">{signInState}</h1>
                <form name="form">
                    {signInState === "Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} className="w-full h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 rounded-sm py-4 px-5 text-[16px] font-[500] " type="text" placeholder="Your name" />:<></>}
                    <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} className="w-full h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 rounded-sm py-4 px-5 text-[16px] font-[500] " type="email" placeholder="Your Email" />
                    <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} className="w-full h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 rounded-sm py-4 px-5 text-[16px] font-[500] " type="password" placeholder="Password" />
                    <button onClick={(e)=>{
                        e.preventDefault();
                        user_auth();
                    }} type="submit" className="w-full border-0 outline-0 p-4 bg-[#e50914] text-white font-[500] mt-5 ">{signInState}</button>
                    {/* Form help */}
                    <div className="flex items-center justify-between text-white font-[13px]">
                        {/* Remember */}
                        <div className="flex items-center gap-[5px]">
                            <input type="checkbox" className="w-[18px]l h-[18px] bg-[#333] cursor-pointer text-white my-[12px] mx-0 border-0 outline-0 rounded-sm py-4 px-5 text-[16px] font-[500] " />
                            <label>Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                {/* Form Switch */}
                <div className="mt-10 text-white font-[500] cursor-pointer">
                    {signInState==="Sign In"?<p>New to Netflix?<span onClick={() =>{
                        setSignInState("Sign Up")
                    }}>Sign Up Now</span></p>:<p>Already have an account?<span onClick={()=>{
                        setSignInState("Sign In")
                    }}>Sign In Now</span></p>}
                </div>
            </div>
        </div>
    );
}

export default Login;