import React from 'react';
import './View.css';
import './bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

class View extends React.Component{
    constructor(){
        super();
        this.state={
            studentDetails:[],
            personalTemp:false,
            academicTemp:false,
            skillTemp:false,
            menuTemp:false,
            email:sessionStorage.getItem('email'),
            password:sessionStorage.getItem('password')
        }
        this.showPersonalDetails=this.showPersonalDetails.bind(this);
        this.showAcademicDetails=this.showAcademicDetails.bind(this);
        this.showSkillDetails=this.showSkillDetails.bind(this);
        this.showMenu=this.showMenu.bind(this);
    }
    componentDidMount(){
        var email=sessionStorage.getItem('email');
        var apiUrl = 'http://localhost:4000/student?email='+this.state.email+'&password='+this.state.password;
        fetch(apiUrl)
        .then(result=>{
            return result.json();
        })
        .then(data=>{
            if(data.length===1){
              this.setState({
                studentDetails:data[0]
              })
              console.log(data[0]);
            }
        })
        .catch((error) => {
          console.error(error);
        });
       /* var apiUrl = 'http://localhost:4000/student?email='+email+'&password='+this.state.password;
        fetch(apiUrl,{
          credentials:'include',
          })
          .then((response) =>response.json())
          .then((responseJson) =>{
          this.setState({
            showDetails:responseJson
          })
          })*/
    }
    showAcademicDetails(){
        this.setState({
            academicTemp:!this.state.academicTemp,
            personalTemp:false,
            skillTemp:false
        })
      }
      showSkillDetails(){
        console.log("inside skill details")
        this.setState({
            skillTemp:!this.state.skillTemp,
            academicTemp:false,
            personalTemp:false
        })
      }
      showPersonalDetails(){
        console.log("inside personal details")
        this.setState({
            personalTemp:!this.state.personalTemp,
            academicTemp:false,
            skillTemp:false
        })
      }
      showMenu(){
       this.setState({
            menuTemp:!this.state.menuTemp
    
       })
    
      }
      logout=()=>{
        console.log(this.state.studentDetails);
       sessionStorage.removeItem('email');
       window.location.href = "index.html";
      }

      render() {
        return (
          <div className="home-page">
            <div className="home-header">
              <div className="sf-title">
                Student Details
              </div>
              {/*<div className={`btn-group${this.menuTemp?'show':""}`} id="menu" style={{paddingRight:"30px"}} >
              <button type="button" className="btn-secondary db-btn-secondary dropdown-toggle" onClick={this.showMenu}>
              MENU
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" onClick={this.showPersonalDetails}>Personal Details</a>
                <a className="dropdown-item" onClick={this.showAcademicDetails}>Academic Details</a>
                <a className="dropdown-item" onClick={this.showSkillDetails}>Skill Details</a>
              </div>
        </div>*/}
              <div className="user-details">
                <div className="user-name">
                    {this.state.password}
                </div>
              </div>
              <button onClick={this.logout} className="logout-icon">
                Logout
              </button>
            </div>
            {<div >
                {!this.state.academicTemp && !this.state.skillTemp?
                  <div className="pd">
                    <div className="details-header">
                      Personal Details
                    </div>
                    <div className="personal-details">
                      <div className="each-details">
                        <div className="detail-label">
                          Name
                        </div>
                        <div className="detail-data">
                          {this.state.studentDetails.name}
                        </div>
                      </div>
                      <div className="each-details">
                        <div className="detail-label">
                          Father's Name
                        </div>
                        <div className="detail-data">
                          {this.state.studentDetails.father_name}
                        </div>
                      </div>
                      <div className="each-details">
                        <div className="detail-label">
                          Mother's Name
                        </div>
                        <div className="detail-data">
                          {this.state.studentDetails.mother_name}
                        </div>
                      </div>
                      <div className="each-details">
                        <div className="detail-label">
                          Email
                        </div>
                        <div className="detail-data">
                          {this.state.studentDetails.email}
                        </div>
                      </div>
                      <div className="each-details">
                        <div className="detail-label">
                          Phone
                        </div>
                        <div className="detail-data">
                          {this.state.studentDetails.phone}
                        </div>
                      </div>
                      <div className="each-details">
                        <div className="detail-label">
                          Blood Group
                        </div>
                        <div className="detail-data">
                          {this.state.studentDetails.bloodgroup}
                        </div>
                      </div>
                      <div className="each-details">
                        <div className="detail-label">
                          Address
                        </div>
                        <div className="detail-data">
                          {this.state.studentDetails.address}
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary personal-next-button" onClick={this.showAcademicDetails} >Next</button>
                  </div>
                :
                  <div>{!this.state.skillTemp?
                    <div className="home-body">
                      <div className="details-header">Academic Details</div>
                      <div className="personal-details">
                        <div className="each-details">
                            <div className="detail-label">10th percentage</div>
                            <div className="detail-data">{this.state.studentDetails.tenth}</div>
                        </div>
                        <div className="each-details">
                            <div className="detail-label">12th percentage</div>
                            <div className="detail-data">{this.state.studentDetails.tewelth}</div>
                        </div>
                        <div className="each-details">
                            <div className="detail-label">UG</div>
                            <div className="detail-data">{this.state.studentDetails.ug}</div>
                        </div>
                        <div className="each-details">
                            <div className="detail-label">PG</div>
                            <div className="detail-data">{this.state.studentDetails.pg}</div>
                        </div>
                      </div>
                    <div className="redirect-button"> 
                    <button type="button" className="btn btn-primary next-button" onClick={this.showSkillDetails}>Next</button>
                    <button type="button" className="btn btn-primary previous-button" onClick={this.showPersonalDetails}>Previous</button>
                    </div>
                  </div>
                  :
                  <div className="home-body">
                    <div className="details-header">Skill Details</div>
                    <div className="personal-details">
                      <div className="each-details">
                          <div className="detail-label">Skills</div>
                          <div className="detail-data">{this.state.studentDetails.skill}</div>
                      </div>
                      
                    </div>
                    <div className="redirect-button"> 
                      <button type="button" className="btn btn-primary previous-button" onClick={this.showAcademicDetails}>Previous</button>
                  
                    </div>
                  </div>
                   }
                </div>
                }
              </div>
              }
          </div>
          
        )
      }
}
 
export default View;
