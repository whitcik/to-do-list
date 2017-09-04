import actionTypes from 'constants/actionTypes';
import localStorageHelper from 'utils/localStorageHelper';

const initialToDoList = [];

export default(toDoList = initialToDoList, payload) => {

  switch (payload.type) {
    case actionTypes.ADD_TO_DO: {

      const newToDoList = [
        ...toDoList,
        {
          id: Date.now(),
          name: payload.name,
          done: false
        }
      ];
      localStorageHelper.setToDoList(newToDoList);
      return newToDoList;
    }
    case actionTypes.MARK_AS_DONE: {

      const newToDoList = toDoList.map(todo => {
        if(todo.id === payload.id) {
          return {
            ...todo,
            done: true
          };
        }
        return todo;
      });
      localStorageHelper.setToDoList(newToDoList);
      return newToDoList;
    }
    case actionTypes.REMOVE_TO_DO: {

      const newToDoList = toDoList.filter(todo => todo.id !== payload.id);
      localStorageHelper.setToDoList(newToDoList);
      return newToDoList;
    }
    case actionTypes.SET_TO_DO_LIST:
      return payload.toDoList;
    default:
      return toDoList;
  }
};
