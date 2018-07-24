import React, { Component } from 'react';


class MyForm extends Component{


    constructor(props){
        super(props);
        
        this.state={
            username: '',
            allusers: [],
            devtype:{
                MEANStack: false,
                MERNStack: true,
                LAMPStack: false
            }
        }

        this.eventHandler = this.eventHandler.bind(this);
        this.arrayHandler = this.arrayHandler.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
    }


    eventHandler(event){
        this.setState({
            username: event.target.value
        })
    }

    arrayHandler(event){
        let currentUser = this.state.allusers;
        console.log(currentUser);
        currentUser.push(this.state.username); //<-- without <span> element
        //currentUser.push(<span className="btn-primary">{this.state.username}</span>);  //<-- with <span> element
        this.setState({
            allusers: currentUser,
            username: ''
        })
        console.log("Hello : " + this.state.allusers);
    }



    radioHandler(event){
        console.log(event.target.value);
        let devtype = this.devtype; 
        
        for (var key in devtype){
            devtype[key] = false /* reset previous values */
        }

        devtype[event.target.value] = event.target.checked
        // this.setState({ devtype: event.target.value })
        this.setState({
            devtype: devtype
        })
    }


    render(){
        return(
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.eventHandler} />
                <button onClick={this.arrayHandler}>Click to Store Username in Array</button>
                <span>{this.state.allusers}</span>

                <h4>Developer Category</h4>
              
                <label>
                    MEAN Stack <input type="radio" name="devcat" value="MEANStack" checked={this.state.devtype['MEANStack']} onChange={this.radioHandler} />
                </label>
                <br/>
                <label>
                    MERN Stack <input type="radio" name="devcat" value="MERNStack" checked={this.state.devtype['MERNStack']} onChange={this.radioHandler} />
                </label>
                <br/>
                <label>
                    LAMP Stack <input type="radio" name="devcat" value="LAMPStack" checked={this.state.devtype['LAMPStack']} onChange={this.radioHandler} />
                </label>

            </div>
        )
    }


}


export default MyForm;