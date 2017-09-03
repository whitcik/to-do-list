import actionTypes from 'constants/actionTypes';

const initialToDoList = [];

export default(toDoList = initialToDoList, payload) => {

  switch (payload.type) {
    case actionTypes.ADD_TO_DO:
      return [
        ...toDoList,
        {
          id: Date.now(),
          name: payload.name,
          done: false
        }
      ];
      case actionTypes.MARK_AS_DONE:
        return toDoList.map(todo => {
          if(todo.id === payload.id) {
            return {
              ...todo,
              done: true
            };
          }
          return todo;
        });
        case actionTypes.REMOVE_TO_DO:
          return toDoList.filter(todo => todo.id !== payload.id);
    default:
      return toDoList;
  }
};
