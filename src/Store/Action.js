
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

export const INC_COUNTER=()=>{
    return {
        type:'INC_COUNTER'
    }
}

export const DEC_COUNTER=()=>{
    return {
        type:'DEC_COUNTER'
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
