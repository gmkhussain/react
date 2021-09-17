const authConfig = {
  authToken: localStorage.getItem('token'),
}

const apiHeaderCofig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
};

export default authConfig;
export { apiHeaderCofig };