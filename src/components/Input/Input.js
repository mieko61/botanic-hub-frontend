import "./Input.scss";

let Input = ({ label, name, type }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name}></input>
    </div>
  );
};

export default Input;
