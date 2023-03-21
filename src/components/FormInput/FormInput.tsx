import { FC, InputHTMLAttributes } from "react";
import { FormInputLabel, Group, Input } from "./FormInput.styles";

type FromInputProps = {
  labelInput: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FromInputProps> = ({ labelInput, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {labelInput && (
        <FormInputLabel
          shrink={Boolean(
            typeof otherProps.value === "string" && otherProps.value?.length
          )}
        >
          {labelInput}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
