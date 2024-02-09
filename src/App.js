import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarTop from './NavBar';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import MovDetails from './pages/MovDetails'
import SearchPage from './pages/SearchPage';
import FavPage from './pages/FavPage';
import Footer from './foot';
function App() {
  return (
    <div className='container-fluid m-0 p-0 h-100 main'>

      <BrowserRouter>
        <NavBarTop />
        <Switch>
          <Route exact path={"/"} component={Home} />

          <Route exact path={"/login"} component={LoginPage} />

          <Route exact path={"/register"} component={RegPage} />
          <Route path={"/movie/:mid"} component={MovDetails}></Route>
          <Route path={"/search"} component={SearchPage}></Route>
          <Route path={"/fav"} component={FavPage}></Route>



          <Route path={"*"} component={ErrorPage}></Route>


        </Switch>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
