import React from "react";
import { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  handleLogin = (data) => {
    setIsLoggedIn(true)
    setUser(data.user)
  }

  handleLogout = () => {
    setIsUserLoggedIn(false)
    setUser({})
  }

  useEffect(() => {
    loginStatus()
  }, [])

  loginStatus = () => {
    fetch("http://localhost:3001/logged_in", {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={} />
          <Route exact path='/login' component={} />
          <Route exact path='/signup' component={} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
