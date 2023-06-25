import React from 'react'
import './Brief.css';
import Timer from '../Timer';
import Date from '../Date';


function Brief() {
   // const currentDate=new Date().toLocalDateString()
    return (
        <div className='brief'>
            <div className='time'>
                <Timer/>
                {/* <p>
                    current date is={currentDate}
                </p> */}
                <img src='https://i.pinimg.com/originals/49/b3/34/49b334332229b662120731b5fb2403c8.png' 
                height={130} width={250}/>
               
            </div>
            <div className='message'>
                <h3><b>Massages..</b>
                
                </h3>
                <br></br> 
                <input type='text' placeholder='Search'/>
                <h5>Recent Massages.</h5>

            </div>
        </div>
        
    )
}



export default Brief;
