import React, { useState, useEffect } from 'react'
import PublicLayout from './layout/PublicLayout'

import axios from 'axios'

import authConfig from '../config/auth-config'

const Contact = () => {

    const [pageData, setPageData] = useState ({
        loading: false,
    })

    const [ formData, setFormData] = useState ({
        "name": "Amoos",
        'email': "amoos@gmail.com",
        'subject': "Sub 1",
        'message': "Msg 1"
    })



    var bodyFormData = new FormData();

    useEffect( ()=> {
         console.log("Doc Ready..")
    }, [])
    


    const onChangeHandle = (e) => {
        setFormData( {...formData, [e.target.name]: e.target.value })
    }


    const onSubmitFunc = (e) => {
        e.preventDefault()

        bodyFormData.append('your-name', formData.name);
        bodyFormData.append('your-email', formData.email);
        bodyFormData.append('your-subject', formData.subject);
        bodyFormData.append('your-message', formData.message);

        sendMail()
        console.log(formData)
    }

     

    const sendMail = () => {
                
            setPageData({ loading: true })

                console.log("Send")
                axios.post(`http://localhost/projects/wordpress/wpv/wp-json/contact-form-7/v1/contact-forms/308/feedback`,
                    bodyFormData, 
                    authConfig.sendMailHeaderConfig
                ).then( res => {
                          console.log("Res", res )
                          setPageData({ loading: false })
                        }
                ).catch( er => console.log("ERRR") )
                
            }

            const { loading } = pageData;

            
    return(
        
        <PublicLayout> 
            
            <div className="container text-white">
            { loading ? "Loading" :
                <form onSubmit={ onSubmitFunc }>
                    <div className="form-group">
                        <input type="text"
                                    name="name" 
                                    value={formData.name}
                                    onChange={ onChangeHandle }
                                    />
                    </div>
                
                    <div className="form-group">
                        <input type="email"
                            name="email" 
                            value={formData.email}
                            onChange={ onChangeHandle }
                            />
                    </div>

                    <div className="form-group">
                        <input type="text"
                                name="subject" 
                                value={formData.subject}
                                onChange={ onChangeHandle }
                                />
                    </div>
                    <div className="form-group">
                        <input type="text"
                                name="message" 
                                value={formData.message}
                                onChange={ onChangeHandle }
                                />
                    </div>
                            
                    <button type="buton">Send</button>
                </form>
            }
                
            </div>
        </PublicLayout>
    )

}

export default Contact

