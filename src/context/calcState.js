import { useReducer } from "react";
import calcContext from "./calcContext";
import calcReducer from "./calcReducer";
import {
    GET_NUMBERS,
    SET_OPERATOR,
    GET_CALCULATE,
    GET_TOTAL,
    CLEAR_ALL,
    DELETE_NUMBER,
    CHANGE_KEY
} from '../types';

const CalcState = props => {
    const initialState = {
        display : '',
        stage: '',
        total: '',
        operator: '',
        isOperating: false,
        currentKey: ''
    }
    
    // Reducer
    const [state, dispatch] = useReducer(calcReducer, initialState);
    
    // Actions
    // Get the numbers
    const setDisplay = number => {
        dispatch({
            type: GET_NUMBERS,
            payload: number
        })
    }

    // Prepare the async operator
    const setOperator = async (operator, object) => {
        dispatch({
            type: SET_OPERATOR,
            payload: {
                operator,
                object: await object,
            }
        })
    }
    // Calculate
    const getCalculate = () => {
        dispatch({
            type: GET_CALCULATE
        })
    }

    // Get the total
    const getTotal = () => {
        dispatch({
            type: GET_TOTAL
        })
    }

    // Clear display
    const clearAll = () => {
        dispatch({
            type: CLEAR_ALL
        })
    }
    // Delete number
    const deleteNumber = () => {
        dispatch({
            type: DELETE_NUMBER
        })
    }

    // Change to active key
    const changeCurrentKey = target => {
        dispatch({
            type: CHANGE_KEY,
            payload: target
        })
    }

    return(
        <calcContext.Provider
            value={{
                display: state.display,
                stage: state.stage,
                total: state.total,
                operator: state.operator,
                isOperating: state.isOperating,
                currentKey: state.currentKey,
                changeCurrentKey,
                setOperator,
                setDisplay,
                getCalculate,
                getTotal,
                clearAll,
                deleteNumber
            }}
        >
            {props.children}
        </calcContext.Provider>
    )
}


export default CalcState;