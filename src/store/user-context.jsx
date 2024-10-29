import {createContext, useReducer, useState} from "react";

export const UserContext = createContext({
    user: {
        username: '',
        // liked apps ...
    },
    setUsername: () => {},
})



function userReducer(state, action){
    if(action.type === 'ADD_USERNAME'){
        return {
            ...state,
            user: {
                ...state.user,
                username: action.payload.username,
            }
        };
    }
    return state;
}



export default function UserContextProvider({ children }){
    const [userState, userDispatch] = useReducer(
        userReducer,
        {
            user: {
                username: localStorage.getItem('username') || 'username',
            //     liked apps ...
            },
        }
    )

    function handleUsernameToUser(username){
        userDispatch({
            type: 'ADD_USERNAME',
            payload: {
                username,
            }
        })
        localStorage.setItem('username', username)
    }

    const userValue = {
        user: userState.user,
        setUsername: handleUsernameToUser,
    };

    return<UserContext.Provider value={userValue}>
        {children}
    </UserContext.Provider>
}