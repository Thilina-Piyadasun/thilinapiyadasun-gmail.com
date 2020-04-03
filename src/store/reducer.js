const initialState = {
    username : "",
    password : "",
    globalKeyBoard : false
};

const reducer = (state = initialState,action) => {

    switch(action.type){
        case "CLR":
            return {
            ...state,
            username: ""
        };
        case "KEYPAD" :
            return {
                ...state,
                globalKeyBoard: !state.globalKeyBoard
            };
        default:
            return {
                ...state,
                username : state.username? state.username + action.value : action.value
            };
    }
};

export default reducer;
