import { useCallback, useReducer } from 'react'

enum IStatus {
    IDLE = 'idle',
    FETCHING = 'fetching',
    SUCCESS = 'fetched_success',
    ERROR = 'fetched_error'
}

interface IInitialState {
    status: IStatus,
    error: {
        message: string
    } | null,
    data: unknown[],
}

interface IMethodUseGetData { 
    execute: (url: string, option: RequestInit | undefined) => void,
    state: IInitialState
}

export const useFetchData = ():IMethodUseGetData => {
    const initialState:IInitialState = {
        status: IStatus.IDLE,
        error: null,
        data: [],
    };

    const [state, dispatch] = useReducer((state: IInitialState, action: { type: IStatus; payload?: any; }) => {
        switch (action.type) {
            case IStatus.FETCHING:
                return { ...initialState, status: IStatus.FETCHING };
            case IStatus.SUCCESS:
                return { ...initialState, status: IStatus.SUCCESS, data: Object.values(action.payload) };
            case IStatus.ERROR:
                return { ...initialState, status: IStatus.ERROR, error: action.payload};
            default:
                return state;
        }
    }, initialState);

    const isSuccess = async (response: any) => {
        const json = await response.json()
        dispatch({ type: IStatus.SUCCESS, payload: json.data  })
    }
    
    const isError = (error: Error) => {
        dispatch({ type: IStatus.ERROR, payload: {message: error.message} });
    }  

    const execute = async (url: string, option: RequestInit | undefined = {} ) => {
        dispatch({ type: IStatus.FETCHING });
        fetch(url, option)
            .then(isSuccess)
            .catch(isError)
    }

     return { 
        execute: useCallback(execute, []), 
        state
     };
}

