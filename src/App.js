import React,{ useState } from "react";
import './App.css';

const Header = (props) => {
  return <h2>{props.text}</h2>;
};

const Label = (props) => {
  return (
    <div>
      <label>{props.text}</label>
      <input 
        type={props.type} 
        placeholder = {props.placeholder}
        value = {props.value}
        onChange = {props.action} />
    </div>
  );
};

const Submit = (props) => {
  return <button onClick={props.click}>{props.check}</button>;
  
};

const App = () => {
  const [loginDetails,setloginDetails] = useState({
    username: "",
    password: ""
  })
  

  const [isLogin,setisLogin] = useState(false)
  const checkLogin = () => {
    if(loginDetails.username === 'admin' && loginDetails.password === 'adminpassword')
    setisLogin(!isLogin)
    if(isLogin === true)
    setloginDetails("")
  }
  const eventPassword =(e) => setloginDetails(
    value => {
      return { ...value, password: e.target.value}
    })
  const eventUser =(e) => setloginDetails(
    value => {
      return { ...value, username: e.target.value}
    })
  

  
  return (
    <div className="App">
      <Header text="Login" />
      {isLogin ? (
        <h1>Hello, {loginDetails.username}!</h1>
      ):(
      <form>
      <Label 
        text="Username"  
        type="text" 
        placeholder="Enter username" 
        value={loginDetails.username}
        action={eventUser}/>
        
        
      <Label 
        text="Password" 
        type="password" 
        placeholder="Enter password" 
        value={loginDetails.password}
        action={eventPassword}/>
      </form>
      )}
      <Submit click={checkLogin} check={isLogin ? 'Logout': 'Login'}/>
      
    </div>
  );
};
export default App;
