import React, { Component } from 'react';
import {connect} from 'react-redux';

class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const data = {
          id: new Date(),
          title,
          message
        }
        this.props.dispatch({
          type:'ADD_POST',
          data});
        this.getTitle.value = '';
        this.getMessage.value = '';
      }
    render() { console.log(this.props.posts)
    return ( 
    <div>
      <h1>Create Post</h1>
      <form onSubmit={this.handleSubmit}>
       <input required type="text" ref={(input)=>this.getTitle = input} 
        placeholder="Enter Email"/>
       <br /><br />
       <input required type="text" ref={(input)=>this.getMessage = input}  
        placeholder="Enter Password" />
       <br /><br />
       <button>Login</button>
      </form>
    </div>
    );
    }
    }
    const mapStateToProps = (state) => {
        return {
            posts: state
        }
    }

    // <button 
    // onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
    // Delete</button>
    export default connect(mapStateToProps)(LoginForm);
    