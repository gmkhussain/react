import React, { Component } from 'react';
import yaml from 'js-yaml';
//import $ from 'jquery';

import jdata from '../_data/data.json';


class DataFetchPage extends Component{

    constructor(props){
        super(props)
        this.state={
            demo_var: "dummy text",
        }
    }


    componentDidMount() {
        console.log("Data loaded :" +jdata[1].title);
    }
 
        
    render(){

        /* 
        $.get( 'https://raw.githubusercontent.com/nodeca/js-yaml/2d1fbed8f3a76ff93cccb9a8a418b4c4a482d3d9/examples/sample_document.yml', function( data2 ) {
            var data = yaml.load( data2 );
            console.log( data.timestamp ); //
        });
        */

        
        const listJsonData = jdata.map(
            (d) =>
            <div key={d.id}>
                <span><b>{d.id}</b> - </span>
                <span>{d.title}</span>
            </div>
        );


        return(
            <div>

                {listJsonData}

                {this.state.demo_var}
            </div>
        )
    }


}

export default DataFetchPage;