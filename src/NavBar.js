
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';




const NavBarTop = () => {

  const favcounter = useSelector(state => state.counter);





  const [searchQuery, setSearchQuery] = useState('')

  const GetChange = (e) => {

    setSearchQuery(e.target.value);
    //console.log(searchQuery);

  }

  const handelSubmit = (e) => {
    e.preventDefault();
    //console.log(searchQuery);

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
                Favorites <span className="badge bg-success">{favcounter}</span>
              </Link>
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
