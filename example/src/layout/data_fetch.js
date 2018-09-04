import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import yaml from 'js-yaml';

import $ from 'jquery';




class DataFetchPage extends Component{

    constructor(props){
        super(props)
        this.state={
            demo_var: "dummy text"
        }
    }




    render(){

        $.get( 'https://raw.githubusercontent.com/nodeca/js-yaml/2d1fbed8f3a76ff93cccb9a8a418b4c4a482d3d9/examples/sample_document.yml', function( data2 ) {
            var data = yaml.load( data2 );
            console.log( data.timestamp ); //
        });
        

        return(
            <div>
                {this.state.demo_var}
            </div>
        )

    }


    


}



export default DataFetchPage;