(function() {
  let App = window.Users.Components.App;

  let {BrowserRouter, Link, Router, Switch} = ReactRouterDOM;

  const { Provider } = ReactRedux;

  let store = window.Users.store;

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
})();
