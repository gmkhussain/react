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


		return(
            <div>
                <h2>Redux Demo Page {this.props.userName} </h2>

                <button onClick={this._changeState.bind(this)}>Change Redux State</button>
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