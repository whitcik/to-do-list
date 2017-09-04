import actionTypes from 'constants/actionTypes';

export const addToDo = (name) => {
  return {
    type: actionTypes.ADD_TO_DO,
    name
  }
}

export const markAsDone = (id) => {
  return {
    type: actionTypes.MARK_AS_DONE,
    id
  }
}

export const removeToDo = (id) => {
  return {
    type: actionTypes.REMOVE_TO_DO,
    id
  }
}

export const setToDoList = (toDoList) => {
  return {
    type: actionTypes.SET_TO_DO_LIST,
    toDoList
  }
}