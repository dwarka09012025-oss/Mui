import './App.css';
import RickApi from './components/RickApi';
// import Head from './components/Head';
// import Foot from './components/Foot';
// import Layout from './components/Layout';
// import Main from './components/Main';
// import Shop from './components/Shop';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <>

      <RickApi />

      {/* <Router>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
