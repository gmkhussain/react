import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";


//const SinglePost = (props) => {

export class SinglePost extends React.Component {

    constructor( props ) {
		super( props );

		this.state = {
            post: {},
            isLoaded: false,
            error: ''
        }
	}

    componentDidMount() {
        let _id = this.props.computedMatch.params.id;
        console.log(_id)

        axios.get( `http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts/`+_id )
				.then( res => {
					console.warn( res.data );
					if ( Object.keys( res.data ).length ) {
						this.setState( { post: res.data, isLoaded: true } );
					} else {
						this.setState( { error: 'No Posts Found', isLoaded: true } );
					}
				} )
				.catch( err => this.setState( { error: "err.response.data.message" } ) );
		
      
    //    console.log("Aniix", this.props.computedMatch.params.id);
    }

    render() {

        const { post, isLoaded, error } = this.state
        console.log("Post: ", this.state)

        

        if(isLoaded === true ) {

            return (<section>
                <div className="container text-white">
                    <h4>Post</h4>
                    
                    <p> {error} </p>

                    <p>{post.title.rendered}</p>
 
                </div>
            </section>)
        }
        
       
        return(
            <div>
                { isLoaded===false ? 
                
                    <div className="container text-white">Loading...</div>
                
                : '' }
            </div>    
        )
        

            
        }
    }

export default withRouter(SinglePost);
