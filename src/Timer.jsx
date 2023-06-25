import React, { Component } from 'react'
class Timer extends Component {
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
                <h4> Today's Date</h4>
                <h5>{this.state.date.toLocaleTimeString()}</h5>
                
                {this.callMe()}
            </div>
        );
    }
}


 
export default Timer;