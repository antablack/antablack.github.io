import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `TOGGLE_HEADER`) {
    return Object.assign({}, state, {
      isExpanded: !state.isExpanded
    })
  }
  return state
}

const initialState = {isExpanded: false}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore