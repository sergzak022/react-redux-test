(function() {
  window.Users = window.Users || {Reducers: {}};

  window.Users.Reducers = window.Users.Reducers || {};

  let { UPDATE_EMAIL, UPDATE_PASS } = window.Users.Actions.User;

  window.Users.Reducers.user = ( users, action ) => {
    switch( action.type ) {
      case UPDATE_EMAIL:
        return updateUserEmailAtIdx( users, action.userIdx, action.email );
      case UPDATE_PASS:
        return updateUserPassAtIdx( users, action.userIdx, action.pass );
      default:
        return users;
    }
  }

  function updateUserEmailAtIdx( users, userIdx, email ) {
    return [
      ...users.slice( 0, userIdx ),
      Object.assign(
        {},
        users[userIdx],
        {email}
      ),
      ...users.slice( userIdx + 1 )
    ];
  }

  function updateUserPassAtIdx( users, userIdx, pass ) {
    return [
      ...users.slice( 0, userIdx ),
      Object.assign(
        {},
        users[userIdx],
        {pass}
      ),
      ...users.slice( userIdx + 1 )
    ];
  }

})();
