import { createAction, handleActions } from "redux-actions";

// action
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const CHANGE_COLOR = "counter/CHANGE_COLOR";

// action creators
// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });
// export const change_color = color => ({ type: CHANGE_COLOR, color });
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const change_color = createAction(CHANGE_COLOR, color => color);

const initialState = {
  number: 0,
  color: "#bfcd7e"
};

// reducer
// export default function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         number: state.number + 1
//       };

//     case DECREMENT:
//       return {
//         ...state,
//         number: state.number - 1
//       };

//     case CHANGE_COLOR:
//       return {
//         ...state,
//         color: action.color
//       };

//     default:
//       return state;
//   }

export default handleActions(
  {
    [INCREMENT]: (state, action) => ({
      ...state,
      number: state.number + 1
    }),
    [DECREMENT]: (state, action) => ({
      ...state,
      number: state.number - 1
    }),
    [CHANGE_COLOR]: (state, action) => ({
      ...state,
      color: action.payload
    })
  },
  initialState
);
