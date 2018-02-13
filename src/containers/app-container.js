(function(){

  window.Users = window.Users || {Containers: {}};
  window.Users.Containers = window.Users.Containers || {};

  const { connect } = ReactRedux;

  window.Users.Containers.App = connect( ( state ) => state )(window.Users.Components.App);
 })();
