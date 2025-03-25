import { useState } from "react";
import { UseInputReturn } from "../interface/interface";

export default function useInput(defaultValue: string = ''): UseInputReturn {
  const [value, setValue] = useState<string>(defaultValue);

  return {
    value,
    onChange: event => setValue(event.target.value),
  };
}
