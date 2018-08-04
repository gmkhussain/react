import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeState } from '../store/action/action';

class AboutPage extends Component{

    _changeState(){
        //console.log("sr");
        //changeState();
        this.props.changeStateToReducer()
    }

	render(){

        /*User records in JSON format*/
        let users = {
            157:{
                name: "Amoos",
                cell: "124545"
            },
            158:{
                name: "Ebad",
                cell: "457587"
            },
            159:{
                name: "Hussain",
                cell: "59859"
            }
        }

        let requiredUser  = users[this.props.match.params.userid] //<-- sorting params to 'requiredUser' varible
        

		return(
            <div>
                <h2>About Page {this.props.userName} </h2>

                <button onClick={this._changeState.bind(this)}>Change Redux State</button>

               User ID: {this.props.match.params.userid} *by normal syntax
               <br/>
               User Name: {requiredUser.name} *by sorting into variable
               <br/>
               User Cell: {requiredUser.cell} *by sorting into variable
            </div>
        )
	}
}


/**redux**/
function mapStateToProps(state){
    return({
        userName: state.rootReducer.userName
    })
}


function mapDispatchToProps(dispatch){
    return({
        changeStateToReducer: ()=>{ /* custom name */
            dispatch(changeState()); //<-- changeState from <action.js> || usage: this.props.changeStateToReducer()
        }
     })
}
/**./redux**/

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);