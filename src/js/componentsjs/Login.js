import { useState } from "react";
import axios from "axios";
import { setUserSesssion } from '../Utils/Common';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const  login = async (username, password)=>{
        try{
            const res = await axios({
                method:'POST',
                url:'http://localhost:8000/api/v1/users/login',
                data:{
                    email: username,
                    password
                },
                 withCredentials: true 
            });
            console.log(res)
            setLoading(false);
            setUserSesssion(res.data.token, res.data.user);
            /* props.history.push('/dashboard'); */
        }catch(err){
                setLoading(false);
                if(err.response.status === 401 || err.response.status === 400){
                       setError(err.response.data.message);
                }else{
                    setError("Somthing went wrong, Please try again later");
                }
               console.log(err.response.data);
        }
    }

    const handleLogin =()=>{
        //props.history.push('/dashboard');
        alert(password, username);
        login( username,password);
    }
    return (
        <div className="login">
            <div className="login__container">
            Login<br/><br/>
             <div>
                 Username<br/>
                 <input type="text" value={username} onChange={e =>setUsername(e.target.value)}/>
                 
             </div><br/>
             <div>
                 Password<br/>
                 <input type="password" value={password} onChange={e =>setPassword(e.target.value)}/>
             </div><br/><br/>
             {error && <div className="login__error">{error}</div>}
             <br/>
             <input type="button" value={loading ? "loading" : "login"} 
             disabled={loading}
             className="login__btn"
             onClick={handleLogin}/>
            </div>
             
        </div>
    )
}

export default Login
