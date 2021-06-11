import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="empty"></div>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
    </div>
  );
}

export default Header;
