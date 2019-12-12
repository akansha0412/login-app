import React, { Component } from 'react';

class List extends Component {
    
      
    render() { console.log(this.props.lists)
    return ( 
    <div>
      <h1>Employee List</h1>
      
    </div>
    );
    }
    }
    const mapStateToProps = (state) => {
        return {
            posts: state
        }
    }

    
    export default  List;
    