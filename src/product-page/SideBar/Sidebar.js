import Category from "./Category/Category";
import Price from "./Price/Price";
import Material from "./Material/Material";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Material handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;