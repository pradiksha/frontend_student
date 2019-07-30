import React from 'react';
import App from './App';
import './SignUp.css';


class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      fatherName:"",
      motherName:"",
      email:"",
      phone:"",
      address:"",
      bgroup:"",
      tenth:"",
      tewelth:"",
      ug:"",
      pg:"",
      skill:"",
      personalTemp:false,
      academicTemp:false,
      skillTemp:false
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.addDetails=this.addDetails.bind(this);
  }

  handleChange(event){
    const {name,value,type}=event.target;
    if(type === "button"){
      this.setState({
        [name]:true
      })
    }
    else{
      this.setState({
        [name]:value
      })
    }
  }

  handleSubmit(event){
    const {name,type}=event.target;
    if(type === "button"){
      this.setState({
        [name]:true
      })
    }
  }

  addDetails(event){
    var body = this.state;
    var header={
      'Content-Type':'application/json'
    }
    var apiUrl = 'http://localhost:4000/student'
      fetch(apiUrl,{
        method: 'POST',
        headers:header,
        body: JSON.stringify(body)
      })
      .then(result=>{
          return result.json();
      })
      .then(data=>{
          if(data.rowCount===1){
            alert('Form submitted sucessfully');
            window.location.href = "index.html";
          }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
    if(this.state.skillTemp){
      return <App />
    }
    else if(this.state.academicTemp){
      return(
        <div>
          <form>
            <fieldset>
              <legend>Skills </legend>
              <div className="container">
                <label>
                  <b>skills</b>
                </label>
                <input type="text" placeholder="Enter skill" name="skill" value={this.state.skill} onChange={this.handleChange} required></input>
                <div className="clearfix">
                <button type="button" name="skillTemp" onClick={this.addDetails} >submit</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      )
    }
    else if(this.state.personalTemp){
      return(
        <div>
          <form>
            <fieldset>
              <legend>Academic Details </legend>
              <div className="container">
                <label>
                  <b>10th percentage</b>
                </label>
                <input type="text" placeholder="Enter 10th percentage" name="tenth" value={this.state.tenth} onChange={this.handleChange} required></input>
                <label>
                  <b>12th perdentage</b>
                </label>
                <input type="text" placeholder="Enter 12th percentage" name="tewelth" value={this.state.tewelth} onChange={this.handleChange} required></input>
                <label>
                  <b>UG</b>
                </label>
                <input type="text" placeholder="Enter UG percentage" name="ug" value={this.state.ug} onChange={this.handleChange} required></input>
                <label>
                  <b>PG</b>
                </label>
                <input type="text" placeholder="Enter PG percentage" name="pg" value={this.state.pg} onChange={this.handleChange} required></input>
                <div className="clearfix">
                <button type="button" name ="academicTemp" onClick={this.handleChange} >Next</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      )
    }
    else{
      return (
        <div>
          <form >
            <fieldset>
              <legend>Personal Details </legend>
              <div className="container">
                <label>
                  <b>Name</b>
                </label>
                <input type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} required></input>
                <label>
                  <b>Father's Name</b>
                </label>
                <input type="text" placeholder="Enter father name" name="fatherName" value={this.state.fatherName} onChange={this.handleChange} required></input>
                <label>
                  <b>Mother's Name</b>
                </label>
                <input type="text" placeholder="Enter mother name" name="motherName" value={this.state.motherName} onChange={this.handleChange} required></input>
                <label>
                  <b>Email</b>
                </label>
                <input type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} required></input>
                <label>
                  <b>Phone</b>
                </label>
                <input type="text" placeholder="Enter mobile number" name="phone" value={this.state.phone} onChange={this.handleChange} required></input>
                <label>
                  <b>Blood Group</b>
                </label>
                <input type="text" placeholder="Enter blood group" name="bgroup" value={this.state.bloodGroup} onChange={this.handleChange} required></input>
                <label>
                  <b>Address</b>
                </label>
                <textarea placeholder="Enter address" name="address" value={this.state.address} onChange={this.handleChange} required></textarea>
                <div className="clearfix">
                  <button type="button" name="personalTemp" onClick={this.handleChange} >Next</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      );
    }
  }
}

export default Signup;
