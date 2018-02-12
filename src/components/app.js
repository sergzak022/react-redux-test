(function() {
  window.Users = window.Users || {Components: {}};

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


    onEmailChange( userIdx, email ) {


      this.setState(({users}, props) => {

        let state = {
          users: [
            ...users.slice( 0, userIdx ),
            Object.assign(
              {},
              users[userIdx],
              {email}
            ),
            ...users.slice( userIdx + 1 )
          ]
        };

        return state;

      });

    }

    onPassChange( userIdx, pass ) {
      this.setState(({users}, props) => {

        let state = {
          users: [
            ...users.slice( 0, userIdx ),
            Object.assign(
              {},
              users[userIdx],
              {pass}
            ),
            ...users.slice( userIdx + 1 )
          ]
        };

        return state;
      });

    }

      render() {

        return <UserFormList
          users={this.state.users}
          onPassChange={({userIdx, pass}) => this.onPassChange(userIdx, pass)}
          onEmailChange={({userIdx, email}) => this.onEmailChange(userIdx, email)}
        />;
      }

    }

})();
