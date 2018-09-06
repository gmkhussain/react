import React, { Component } from 'react';


class AboutPage extends Component{

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

                

               User ID: {this.props.match.params.userid} *by normal syntax
               <br/>
               User Name: {requiredUser.name} *by sorting into variable
               <br/>
               User Cell: {requiredUser.cell} *by sorting into variable
            </div>
        )
	}
}


export default AboutPage;