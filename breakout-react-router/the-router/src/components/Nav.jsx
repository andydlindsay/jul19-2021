import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/products">Products</Link>
    </nav>
  );
};

export default Nav;
