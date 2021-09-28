const authConfig = {
  authToken: localStorage.getItem('token'),
}

const apiHeaderCofig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
};


const apiAuthOnly = {
  headers: {
      "Authorization" : `Bearer ${localStorage.getItem('token')}`
  }
};

const sendMailHeaderConfig = {
  headers: { 
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'multipart/form-data;boundary=---------------------------974767299852498929531610575'    
  }
}

export default authConfig;
export { apiHeaderCofig, sendMailHeaderConfig, apiAuthOnly };