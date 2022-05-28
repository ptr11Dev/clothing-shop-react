import "./FormInput.scss";

const FormInput = ({ labelInput, ...otherProps }) => {
  return (
    <div className="group">
      <input className="formInput" {...otherProps} />
      {labelInput && (
        <label
          className={`${
            otherProps.value.length > 0 ? "shrink" : ""
          } formInputLabel`}
        >
          {labelInput}
        </label>
      )}
    </div>
  );
};
export default FormInput;
