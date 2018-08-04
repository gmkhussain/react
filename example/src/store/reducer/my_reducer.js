const INITIAL_STATE = {
    userName: 'Alex Josh',
    rollNumber: 'fff'
}
//static data for now   

export default (states = INITIAL_STATE, action)=>{
    switch(action.type){

        case 'CHANGEUSERNAME':
            return ({
                ...states,
                userName: action.payload
            })


        default:
            return states;  
    }
}