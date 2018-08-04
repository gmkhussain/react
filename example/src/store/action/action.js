export function changeState(){
    return dispatch =>{
        //console.log("from action..");
        dispatch({type:'CHANGEUSERNAME', payload: 'New Name'}) /*payload = new or updated state data*/
    }
}