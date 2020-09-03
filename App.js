import React from 'react'

 export default
  class App  extends React.Component {
    constructor() {
        super()
       
        this.state = {
            count: 0
            ,co:0
            ,cou:0 
        }
      this.addHrs = this.addHrs.bind(this);
      this.addMns = this.addMns.bind(this);
      this.addSec = this.addSec.bind(this);
      this.reset = this.reset.bind(this);
        
    }

    addHrs() {
        this.setState(prevState => {
            return{  
                count: prevState.count + 1
                }
        })
    }addMns() {
        this.setState(prevState => {
            return{  
                co: prevState.co + 1
                }
        })
    }addSec() {
        this.setState(prevState => {
            return{  
                cou: prevState.cou + 1
                }
        })
    }
    reset() {
        this.setState(prevState => {
            return{  
                count: prevState.count - prevState.count,
                co: prevState.co - prevState.co,
                cou: prevState.cou - prevState.cou
                }
        })
    }
   

    
  
    
    render() {
        return (
            <header>
            <div>
            <div  className = "header">
            <h3>Hours</h3>
            <p>{this.state.count}</p>
             <button onClick = {this.addHrs}>Add hours</button>
            </div>
            <div  className = "header">
            <h3>Minutes</h3>
            <p>:{this.state.co} </p>
             <button onClick = {this.addMns}  >Add minutes</button>
            </div>
            <div  className = "header">
            <h3>Seconds</h3>
            <p>:{this.state.cou}</p>
             <button onClick = {this.addSec}>Add seconds</button>
            
            </div>
             </div>
            
             <button onClick = {this.reset} className = "button">Reset</button>
            
            
            
        
            
            
            
            
            </header>
        )
    }
}

