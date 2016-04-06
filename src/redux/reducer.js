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
      var test =  Object.assign({}, oldState, {
        todos: oldState.todos.map((todo) => todo.task === action.item ?
        Object.assign({}, todo, { isCompleted: !todo.isCompleted }) : todo),
      });

      return test;

    default:
      return oldState;
  }
}
