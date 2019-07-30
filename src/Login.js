import React from 'react';
import './App.css';
import SignUp from './SignUp';

class Login extends React.Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:"",
      signup:false
    }
    this.handleOnChange=this.handleOnChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.landing=this.landing.bind(this);
  }

  handleOnChange(event){
    const {name,value}=event.target;
    this.setState({
      [name]:value
    })
    
  }

  handleSubmit(event){
    console.log("HERE");
    var apiUrl = 'http://localhost:4000/student?email='+this.state.email+'&password='+this.state.password;
      fetch(apiUrl)
      .then(result=>{
          return result.json();
      })
      .then(data=>{
          if(data.length===1){
            sessionStorage.setItem('email',this.state.email);
            sessionStorage.setItem('password',this.state.password);
            
          }
          else{
            alert('Authentication error');
            return false;
         }
         window.location.href = "index.html";
      })
      .catch((error) => {
        console.error(error);
      });

  }

  handleClick(event) {
    this.setState({
      signup:true
    })
    this.landing()
  }

  landing(){
    if(this.state.signup){
      return <SignUp />
    }
    else{
      return(
        <div>
          <form>
            <fieldset>
              <legend>Login Form</legend>
              <div className="container">
                <label>
                  <b>Email</b>
                </label>
                <input type="email" placeholder="Enter username" name="email" value={this.state.email} onChange={this.handleOnChange} required></input>
                <label>
                  <b>Password</b>
                </label>
                <input type="password" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleOnChange} required></input>
                <div className="clearfix">
                  <button type="button" onClick={this.handleSubmit} className="loginbtn">Login</button>
                  <button type="button" onClick={this.handleClick} className="signupbtn">Signup</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      )
    }
  }

  render(){
    
    return (
      this.landing()
    );
  }
}

export default Login;
