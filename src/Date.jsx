import React, { Component } from 'react'
class Date extends Component {
    state = { 
        date:new Date()
     } ;
     callMe(){
        setInterval(() => {
            this.setState({date:new Date()});
            
        }, 1000);
     }
    render() { 
        return (
            <div className='timer'>
                <h2>Date</h2>
                <h2>Its is{this.state.date.toLocaleDateString()}</h2>
                
                {this.callMe()}
            </div>
        );
    }
}


 
export default Date;