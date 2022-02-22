import './App.css';
import Navbar from './layouts/navbar/Navbar';
import Home from './home/Home';
import Create from './Create/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails/BlogDetails';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/create'>
              <Create></Create>
            </Route>
            <Route exact path='/blogs/:id'>
              <BlogDetails></BlogDetails>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
