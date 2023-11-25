import "./Input.scss";

let Input = ({ label, name, type }) => {
  return (
    <div className="input">
      <label className="input_label" htmlFor={name}>
        {label}
      </label>
      <input className="input_box" type={type} id={name} name={name}></input>
    </div>
  );
};

export default Input;
