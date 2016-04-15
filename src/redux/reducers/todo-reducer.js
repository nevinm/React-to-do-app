function getId(todos) {
  var updatedId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
  return updatedId;
}

export default function toDoReducer(todos= [], action) {
  switch (action.type){
    case 'ADD_ITEM':
      return [{
          task: action.item,
          isCompleted: false,
          id: getId(todos),
        }, ...todos,
      ];

    case 'TOGGLE_ITEM':
      var toggledItem = todos.map((todo) => todo.task === action.item ?
        Object.assign({}, todo, { isCompleted: !todo.isCompleted }) : todo);

      return toggledItem;

    case 'SAVE_ITEM':
      var savedItem = todos.map((todo) => todo.task === action.item.oldTask ?
          Object.assign({}, todo, { task: action.item.newTask }) : todo);

      return savedItem;

    case 'DELETE_ITEM':
      var deletedItem =  todos.filter((todo) => todo.task !== action.item);

      return deletedItem;

    default:
      return todos;
  }
}
