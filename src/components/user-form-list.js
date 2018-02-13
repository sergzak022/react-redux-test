
(function() {
  window.Users = window.Users || {Components: {}};
  window.Users.Components.UserFormList = UserFormList;

  let {bindActionCreators} = Redux;

  let {updateEmail, updatePass} = window.Users.Actions.User;

  let store = window.Users.store;

  let acions = bindActionCreators({updateEmail, updatePass}, store.dispatch);

  let UserForm = Users.Components.UserForm;

  function UserFormList( {users, onUsersChange} ) {

    return <ul>
      {users.map( ({email, pass}, userIdx) => {

        return <UserForm
          key={userIdx}
          email={email}
          pass={pass}
          onEmailChange={(email) => acions.updateEmail(email, userIdx)}
          onPassChange={(pass) => acions.updatePass(pass, userIdx)}
        />;
      })}
    </ul>;
  };

})();
