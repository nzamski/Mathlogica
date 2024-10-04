import { MathfieldElement } from "mathlive";
import { type FC } from "react";
import "//unpkg.com/mathlive";

export interface MathFieldInputProps {
  value?: string;
  onInput?: React.FormEventHandler<MathfieldElement>;
}

export const MathFieldInput: FC<MathFieldInputProps> = ({ value, onInput }) => (
  <math-field
    style={{
      display: "block",
      border: "none",
      backgroundColor: "transparent",
      outline: "none",
      padding: "0",
      margin: "0",
    }}
    onInput={onInput}
  >
    {value}
  </math-field>
);
