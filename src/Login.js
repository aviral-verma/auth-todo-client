import React,{useState} from 'react';
import Nav from './Nav';
import {Link,useHistory} from 'react-router-dom'

const Login = ()=> {
    const history = useHistory()
   // const [name, setName] = useState("")
     const [password, setPassword] = useState("")
      const [email, setEmail] = useState("")
      const PostData = () => {
          fetch("/api/signup", {
              method: "post",
              headers:{
                  "Content-Type": "application/json"
              },
              body:JSON.stringify({
                 // name,
                  password,
                  email
              })
          }).then(res=>res.json())
          .then(data => {
              if(data.error){
                  console.log("error")
              }
              else{
              history.push('/')
              }
          }).catch(err=> {
              console.log(err)
          })
          
      }
    return (
         
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>LOGIN</h1>
            <br />
            <form>
                 <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input
                        //value={email}
                        type="text"
                        className="form-control"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input
                       // value={password}
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => PostData()}>Login</button>
                </div>
            </form>
        </div>
    );


    
}

export default Login;