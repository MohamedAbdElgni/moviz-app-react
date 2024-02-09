
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeLang } from './Store/Actions/LangAction';


const NavBarTop = () => {

  // favorite movies counter

  const movieList = useSelector(state => state.combinmovie.movieList);
  const counter = movieList.length;
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useDispatch();



  const GetChange = (e) => {

    setSearchQuery(e.target.value);
    //console.log(searchQuery);

  }

  const handelSubmit = (e) => {
    e.preventDefault();
    //console.log(searchQuery);

  }
  const lang = useSelector(state => state.combinlang.lang);

  useEffect(() => {
    dispatch(changeLang(lang));
  }
    , [lang, movieList, dispatch]);

  const handelChangeLang = (e) => {
    dispatch(changeLang(e.target.value));
  }












  return (
    <Navbar expand="lg" className="shadow-lg bg-light position-sticky top-0" style={{ zIndex: 50 }}>
      <div className='container'>
        <Navbar.Brand className='text-dark logo p-0 ms-0' ><Link className="" to="/">Movie App</Link></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav " className='bg-light '>
          <Nav className='me-auto'>
            <li className='nav-item border-bottom border-dark'>
              <Link
                className='nav-link text-dark'
                to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item nav-item  '>
              <Link
                className='nav-link text-dark'
                to='/login'>
                Login
              </Link>
            </li>
            <li className='nav-item nav-item '>
              <Link
                className='nav-link text-dark'
                to='/register'>
                Register
              </Link>
            </li>
            <li className='nav-item nav-item '>

              <Link
                className='nav-link text-dark' to='/fav'>
                Favorites <span className="badge bg-success">{counter}</span>
              </Link>
            </li>

            {/*Change Language */}
            <li className='nav-item nav-item ps-sm-5 '>
              <select className="form-select" aria-label="Default select example" value={lang} onChange={(e) => handelChangeLang(e)} >
                <option value="en" >English</option>
                <option value="ar">Arabic</option>
                <option value="fr">French</option>
              </select>
            </li>

          </Nav>

          <Form className="d-flex" onSubmit={(e) => handelSubmit(e)}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 rounded-0"
              aria-label="Search"
              value={searchQuery}
              onChange={GetChange}
              name='search'

            />
            <Link to={`/search?q=${searchQuery}`} qurey={searchQuery}><Button variant="outline-dark" className='rounded-0'>Search</Button></Link>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBarTop;
