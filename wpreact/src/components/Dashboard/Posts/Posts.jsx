import React, { useState, useEffect, useContext, useCallback } from 'react';
import DashboardLayout from "../../layout/DashboardLayout";


import post from '../../../services/post'
import AppContext from '../../context/AppContext';


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
		console.log("Result: ", res.data)

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
	



	return (
		<DashboardLayout>
			{
			  postData.loading === true
			  ? " Loading... "
			  : " Posts "
			} 
			
		</DashboardLayout>
	)
};

export default DashboardPosts;