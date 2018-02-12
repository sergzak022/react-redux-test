
(function() {
  window.Users = window.Users || {Components: {}};
  window.Users.Components.UserFormList = UserFormList;

  let UserForm = Users.Components.UserForm

  function UserFormList( {users, onEmailChange, onPassChange} ) {

    console.log('UserFormList render with users', users);


    return <ul>
      {users.map(({email, pass}, idx) => <UserForm
        key={idx}
        email={email}
        pass={pass}
        onEmailChange={(email) => onEmailChange({userIdx: idx, email})}
        onPassChange={(pass) => onPassChange({userIdx: idx, pass})}
      />)}
    </ul>;
  };
})();
