import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemContext } from 'ThemContext'
import NavBar from 'components/NavBar'
import Home from 'pages/home'
import About from 'pages/about'
import Works from 'pages/works'
import 'assets/style.scss';

const App = () => {
  const [them, setThem] = useState(localStorage.themChoice || "light");
  // const providerThem = useMemo(() => ({ them, setThem }), [them, setThem]);
  document.body.classList.add(localStorage.themChoice)
  return (
    <div>
      <Router>
        <ThemContext.Provider value={{them, setThem}} >
          <NavBar />
          <main className="bodyPage">
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/works' exact>
                <Works />
              </Route>
            </Switch>
          </main>
        </ThemContext.Provider>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))