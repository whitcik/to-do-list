import actionTypes from 'constants/actionTypes';

export const addToDo = (name) => {
  return {
    type: actionTypes.ADD_TO_DO,
    name
  }
}