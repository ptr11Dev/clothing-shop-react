import { FormInputLabel, Group, Input } from "./FormInput.styles";

const FormInput = ({ labelInput, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {labelInput && (
        <FormInputLabel shrink={otherProps.value.length}>
          {labelInput}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
