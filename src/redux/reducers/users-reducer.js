export default function userReducer(user ={}, actions) {
  switch (actions.type) {
    case 'CREATE_USER_ID':
      var newUser = Object.assign({}, user, {
          username: user.username,
          id: actions.id,
        });

      return newUser;

    default:
      return user;
  }
}
