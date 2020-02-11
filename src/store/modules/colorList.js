import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "colorList/CHANGE_INPUT";
const INSERT = "colorList/INPUT";
const UPDATE = "colorList/UPDATE";
const REMOVE = "colorList/REMOVe";

let id = 1;
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const insert = createAction(INSERT, color => ({ color, id: id++ }));
export const update = createAction(UPDATE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
  input: "",
  list: []
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload
    }),
    [INSERT]: (state, action) => ({
      ...state,
      list: state.list.concat({
        id: action.payload.id,
        color: action.payload.color,
        opacity: 1
      })
    }),

    [UPDATE]: (state, action) => ({
      ...state,
      list: state.list.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            opacity: item.opacity - 0.1
          };
        }
        return item;
      })
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      list: state.list.filter(item => item.id !== action.payload)
    })
  },
  initialState
);
