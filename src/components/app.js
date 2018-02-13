(function() {
  window.Users = window.Users || {Components: {}};

  window.Users.Components = window.Users.Components || {};

  let UserFormList = window.Users.Components.UserFormList;

  window.Users.Components.App = class App extends React.Component {

    constructor() {
      super();
      this.state =
        {
          users: [
            {email: 'ivan@gmail.com', pass: '12345'},
            {email: 'sergey@gmail.com', pass: '32424'},
            {email: 'petro@gmail.com', pass: '3423'}
          ]
        };
    }

    onUsersChange(users) {
      this.setState({users});
    }

    render() {

      return <UserFormList
        users={this.state.users}
        onUsersChange={(users) => this.onUsersChange(users)}
      />;
    }

  }

})();
