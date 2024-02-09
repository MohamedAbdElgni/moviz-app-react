
export const changeLang=(payload)=>{
    return {
        type:'CHANGE_LANG',
        payload:payload
    }
}

export const changeTheme=(payload)=>{
    return {
        type:'CHANGE_THEME',
        payload:payload
    }
}

export const counter=(payload)=>{
    return {
        type:'counter',
        payload:payload
    }
}

export const ADD_MOVIE=(payload)=>{
    return {
        type:'ADD_MOVIE',
        payload:payload
    }
}

export const REMOVE_MOVIE=(payload)=>{
    return {
        type:'REMOVE_MOVIE',
        payload:payload
    }
}
