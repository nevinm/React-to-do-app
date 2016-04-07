export default function reducer(oldState, action) {
  switch (action.type){
    case 'ADD_ITEM':
      return {
        todos:[{
          task: action.item,
          isCompleted: false,
        }, ...oldState.todos,
        ],
      };

    case 'TOGGLE_ITEM':
      var toggledItem =  Object.assign({}, oldState, {
        todos: oldState.todos.map((todo) => todo.task === action.item ?
        Object.assign({}, todo, { isCompleted: !todo.isCompleted }) : todo),
      });

      return toggledItem;

    case 'SAVE_ITEM':
      var savedItem =  Object.assign({}, oldState, {
        todos: oldState.todos.map((todo) => todo.task === action.item.oldTask ?
          Object.assign({}, todo, { task: action.item.newTask }) : todo),
      });

      return savedItem;

    default:
      return oldState;
  }
}
