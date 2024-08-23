// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PersonIcon from '@mui/icons-material/Person';
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search."
        />
      </div>
      {/* <div className="profile-container">
        <a href="#">
          <FavoriteIcon className="nav-icons" />
        </a>
        <a href="">
          <ShoppingCartIcon className="nav-icons" />
        </a>
        <a href="">
          <PersonIcon className="nav-icons" />
        </a>
      </div> */}
    </nav>
  );
};

export default Nav;