import {
    GET_NUMBERS,
    SET_OPERATOR,
    GET_CALCULATE,
    GET_TOTAL,
    CLEAR_ALL,
    DELETE_NUMBER,
    CHANGE_KEY
    
} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case GET_NUMBERS:
            if(state.display === "" || state.display === "0"){
                return {
                    ...state, 
                    isOperating: false,
                    display: action.payload
                }
            }else if(state.display) {
                return {
                        ...state,
                        isOperating: false,
                        total: !state.stage && !state.operator ? '' : state.total ,
                        display: state.display === "0" && action.payload === "0" ? action.payload : state.display + action.payload ,
                    }
            }else {
                return {
                    ...state,
                        isOperating: false,
                        total: !state.stage && !state.operator ? '' : state.total ,
                        display: state.display + action.payload,
                }
            }
        case SET_OPERATOR :
            if(state.display || state.total !== '') {
                return {
                    ...state,
                    operator: action.payload.operator,
                }
            }else {
                return {
                    ...state,
                }
            }
        case GET_CALCULATE:
            if(!state.stage && !state.total && state.display !== '' ){
                return {
                    ...state,
                    isOperating: true,
                    stage : parseFloat(state.display),
                    total: parseFloat(state.display),
                    display : ''
                }
            }else {
                return {
                    ...state,
                    isOperating: true,
                    stage : '',
                    total: state.display !== '' ? isNaN(state.total) ? eval(state.display + state.operator + state.stage) : eval( state.total + state.operator + state.display) : state.total,
                    display: '',
                }
            }

        case GET_TOTAL:
            // Validate stage + display
            if(state.stage && state.display !== '' && state.display ){
                return {
                    ...state,
                    isOperating: true,
                    total: state.display ? isNaN(state.total) ? eval(parseFloat(state.display) + state.operator + parseFloat(state.stage)) : eval( parseFloat(state.total) + state.operator + parseFloat(state.display)) : state.total,
                    operator: '',
                    stage: '',
                    display: '',
                    currentKey: ''
                }

            // Validate display + total
            }else if(state.display && state.total !== '' || state.display === 0 || state.total === 0) {
                return {
                    ...state,
                    isOperating: true,
                    total: state.display !== '' ? isNaN(state.total) ? eval(parseFloat(state.display) + state.operator + parseFloat(state.stage)) : eval( state.total + state.operator + parseFloat(state.display)) : 'No es un número',
                    operator: '',
                    stage: '',
                    display: '',
                    currentKey: ''
                }
            }else{
                return {
                    ...state
                }
            }

        case DELETE_NUMBER:
            if(!state.total){
                return{
                    ...state,
                    display: state.display.slice(0, -1) 
                }
            }else {
                return{
                    ...state
                }
            }

        case CLEAR_ALL:
            return{
                display : '',
                stage: '',
                total: '',
                isOperating: false,
                operator: '',
                currentKey: ''
            }

        case CHANGE_KEY:
            if(state.display || state.total || state.display !== "0"){
                return{
                    ...state,
                    currentKey: action.payload
                }    
            }else {
                return{
                    ...state
                }
            }
        default:
            return {
                ...state
            }
    }
}