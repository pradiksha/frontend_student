import React from 'react';
import './App.css';
import Login from './Login';
import View from './View';

class App extends React.Component{
  render(){
            var email=sessionStorage.getItem('email');
            var password=sessionStorage.getItem('password');
            console.log(email);
            if((email) && (password))
            {
              return(
                <View />
              )
            }
            else{
                  return(
                    <Login />
                  );
                }
           }
  }
 
export default App;
