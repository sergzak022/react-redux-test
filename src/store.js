(function(){
  window.Users = window.Users || {};
  window.Users.store = Redux.createStore( window.Users.Reducers.user );
 })();
