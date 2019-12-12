import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './List';



class LoginForm extends Component {
   constructor(props) {
        super(props);
        this.state = {
            'value': {
                'emailErr': '',
                'passErr': '',
                'errFlag': false
            },
            flag :'login'
        };

    }
    handleSubmit = (e) => {
        
        var valueObj = this.state.value;
        e.preventDefault();
        const email = this.email.value;
        const pass =  this.pass.value;
        if(email != 'hruday@gmail.com'){
          valueObj['emailErr'] = 'Please enter correct name';
            valueObj['errFlag'] = true;
        }
        if(pass != 'hruday123'){
          valueObj['passErr'] = 'Please enter correct password';
            valueObj['errFlag'] = true;
        }
        this.setState({ value: valueObj });
        if (this.state.value.errFlag) {
          
          this.email.value = '';
        this.pass.value = '';
        this.state.value.errFlag = false;
        
        }
        else
        {
          
          this.state.value.emailErr = '';
        this.state.value.passErr = '';
        this.props.dispatch({
          type:'ADD_POST'});
        this.setState({ flag: 'list' });
      }
        
      }

     
    render() { 
      if(this.state.flag =='login'){
    return ( 
      
    <div>
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
       <input required type="text" ref={(input)=>this.email = input} 
        placeholder="Enter Email"/>
        <div  id="emailErr">{this.state.value.emailErr}</div>
       <br /><br />
       <input required type="text" ref={(input)=>this.pass = input}  
        placeholder="Enter Password" />
        <div  id="passErr">{this.state.value.passErr}</div>
       <br /><br />
        <button>Login</button>
      </form>
    </div>
  
    );
  }
  else{
    return(
 <List lists={this.props.posts}/>
    );
  }
    }
    }
    const mapStateToProps = (state) => {
        return {
            posts: state
        }
    }

  
    export default connect(mapStateToProps)(LoginForm);
    