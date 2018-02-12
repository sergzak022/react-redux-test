(function() {
  let App = window.Users.Components.App;

  let {BrowserRouter, Link} = ReactRouterDOM;

  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById('root')
  );
})();
