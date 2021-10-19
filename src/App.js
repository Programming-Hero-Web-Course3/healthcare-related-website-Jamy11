import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import LogIn from './pages/LogIn';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'  >
              <Redirect to='/home' />
            </Route>

            <Route exact path='/home' component={Home} />
            <Route exact path='/login' component={LogIn} />

            <Route path='/*' component={ErrorPage} />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
