export default function reducer(state, action) {
  switch (action.type){
    case 'ADD_ITEM':
      return {
        todos:[{
          task: action.item,
          isCompleted: false,
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
      var savedItem =  Object.assign({}, state, {
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
