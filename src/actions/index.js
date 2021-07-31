import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_SMURF_LOADING = 'FETCH_SMURF_LOADING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_MESSAGE = 'ERROR_MESSAGE'


export const getSmurf = () => {
    return dispatch => {
        dispatch({type: FETCH_SMURF_LOADING})
          axios.get('http://localhost:3333/smurfs')
          .then(res => {
              console.log(res)
              dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
          })
          .catch(err => {
              console.log(err)
              dispatch({type: FETCH_SMURF_ERROR, payload: err.error})
          })
    }
}

export const error= () => {
    return dispatch => {
        dispatch({type: ERROR_MESSAGE,payload: "Name, position and nickname fields are required."})
    }
}

export const addSmurf = (smurf) => {
    return dispatch => {
        dispatch({type: ADD_SMURF, payload: smurf})
    }
}