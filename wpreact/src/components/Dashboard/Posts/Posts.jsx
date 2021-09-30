import React, { useState, useEffect, useContext, useCallback } from 'react';
import DashboardLayout from "../../layout/DashboardLayout";

import post from '../../../services/post'
import AppContext from '../../context/AppContext';

import { Link } from 'react-router-dom'

const DashboardPosts = () => {

	const [postData, setPostData] = useState({
			loading: true,
			posts: [{"a":1}]
		  });

	const [ store, setStore ] = useContext( AppContext );
	console.log("Store: ", store)

  


	const getAllPosts1 = useCallback(async () => {
		// alert(1)
		console.log( "getAllPosts()..." )
		let res = await post.list();
		console.log("Dashboard Post: ", res.data)

		if ( res.status === 200 ) {
		  console.log("getAllPost Loaded")
		  setPostData({ loading: false, posts: res.data })
		  console.log( postData )
		}

	}, [setPostData] )




	
	useEffect( ()=> { 
		console.log("ONE TIME")
	}, [ ] );


	

	useEffect( ()=> {
	  getAllPosts1()
	}, [getAllPosts1] );
	


	const { posts, loading } = postData;


	return (
		<DashboardLayout>

			{
			  loading === true
			  ? " Loading... "
			  : 
			  	<div className="container ">
					<div className="table text-white" >
					   <div className="tbody" >
							{ 
							posts.map( p=>(
								
								<div className="tr" key={p.id}>
									<div className="td">
										<small>{p.id}</small>
										<p>{p.title.rendered}</p>
									</div>
									<div className="td">
										<span className="badge badge-success">{p.status}</span>
									</div>
									<div className="td">
										<Link to={`/dashboard/post/edit/${301}`}>Edit</Link>
									</div>
								</div>
							))
							}
					</div>
				</div>
			  </div>

			} 
			
		</DashboardLayout>
	)
};

export default DashboardPosts;