(function() {

  window.Users = window.Users || {Actions: {}};

  window.Users.Actions = window.Users.Actions || {};

  const UPDATE_EMAIL = 'UPDATE_EMAIL';
  const UPDATE_PASS = 'UPDATE_PASS';

  window.Users.Actions.User = {
    UPDATE_EMAIL, UPDATE_PASS,
    updateEmail: ( email, userIdx ) => ({type: UPDATE_EMAIL, email, userIdx}),
    updatePass: ( pass, userIdx ) => ({type: UPDATE_PASS, pass, userIdx})
  };

})();
