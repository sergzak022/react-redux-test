
(function() {
  window.Users = window.Users || {Components: {}};
  window.Users.Components.UserForm = UserForm;

  function UserForm( {email, pass, onEmailChange, onPassChange} ) {

    console.log('UserForm render with email', email);
    console.log('UserForm render with pass', pass);

    return <form>
      <label>
        <span>Email</span>
        <input value={email} onChange={({target: {value}}) => onEmailChange(value)} type="text" />
      </label>
      <br />
      <label>
        <span>Pass</span>
        <input value={pass} onChange={({target: {value}}) => onPassChange(value)} type="text" />
      </label>
    </form>;
  };
 })();
