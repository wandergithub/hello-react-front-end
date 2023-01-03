// Actions
const LOAD = "my-app/greetings/LOAD";


// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD:
      return { message: action.payload };
    default:
      return state;
  }
}

// Action Creators
export function loadGreeting(payload) {
  return { type: LOAD, payload: payload };
}

export function getMessage() {
  return async (dispatch, getState) => {
    const response = await fetch("http://127.0.0.1:3000/api/v1/message");
    const json = await response.json();
    dispatch(loadGreeting(json.text));
  };
}