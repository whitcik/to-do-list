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
    default:
      return toDoList;
  }
};
