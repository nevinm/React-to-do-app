export default function reducer(oldState, action) {
  switch (action.type){
    case 'ADD_ITEM':
      var test = {
        todos:[{
          task: action.item,
          isCompleted: false,
        }, ...oldState.todos,
        ],
      };

      return test;

    default:
      return oldState;
  }
}
