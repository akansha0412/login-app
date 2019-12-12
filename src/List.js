import React, { Component } from 'react';
import Employee from './Employee';


class List extends Component {
    
      
    render() { 
    	var listItems = this.props.lists.user.map(e => (
      <Employee id={e.id} name={e.name} age={e.age} gender={e.gender} email={e.email} phone={e.phoneNo} />
    ));
    return ( 
    <div>
      <h1>Employee List</h1>
      <ul className="employee-list">
           {listItems}
        </ul>
    </div>
    );
    }
    }
   

    
    export default  List;
    