export default {
  setToDoList: function (toDoList) {
    return localStorage.setItem("toDoList", JSON.stringify(toDoList));
  },
  getToDoList: function () {
    return JSON.parse(localStorage.getItem("toDoList"));
  }
}