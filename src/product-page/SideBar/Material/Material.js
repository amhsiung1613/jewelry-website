import "./Material.css";
import Input from "../../Product-Components/Input";

function Material({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Material</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="gold"
          title="Gold"
          name="test1"
          color="gold"
        />

        <Input
          handleChange={handleChange}
          value="silver"
          title="Silver"
          name="test1"
          color="silver"
        />

        {/* <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        /> */}

        {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label> */}
      </div>
    </>
  );
};

export default Material;