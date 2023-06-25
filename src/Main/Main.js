import React from 'react'
import './Main.css'

import Chart from '../Chart';
import Activity from '../Activity';
import Card from '../Card';


function Main() {
    return (
        <div className='main'>

            <div className='dashboard'> 
            <img src='https://banner2.cleanpng.com/20180403/udq/kisspng-computer-icons-dashboard-inventory-management-soft-phone-case-5ac404badd52e0.9353017015227957069066.jpg'
            width={710} height={200}/>
            
            </div>
            <div className='project'>hello project</div>
            <div className='flex'>
            <div className='activity'>
                <Activity/>
            </div>
            <div className='payment'><Card/></div></div>
            <div className='accounting'>
              <Chart/>
            </div>
        </div>
        
    )
}



export default Main;
