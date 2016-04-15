function getId(state) {
  var updatedId = state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
  return updatedId;
}

export default function reducer(state, action) {
  switch (action.type){
    case 'ADD_ITEM':
      return {
        todos:[{
          task: action.item,
          isCompleted: false,
          id: getId(state),
        }, ...state.todos,
        ],
      };

    case 'TOGGLE_ITEM':
      var toggledItem =  Object.assign({}, state, {
        todos: state.todos.map((todo) => todo.task === action.item ?
        Object.assign({}, todo, { isCompleted: !todo.isCompleted }) : todo),
      });

      return toggledItem;

    case 'SAVE_ITEM':
      var savedItem = Object.assign({}, state, {
        todos: state.todos.map((todo) => todo.task === action.item.oldTask ?
          Object.assign({}, todo, { task: action.item.newTask }) : todo),
      });

      return savedItem;

    case 'DELETE_ITEM':
      var deletedItem =  Object.assign({}, state, {
         todos: state.todos.filter((todo) => todo.task !== action.item),
       });

      return deletedItem;

    default:
      return state;
  }
}
