import React, {useEffect, useState} from "react";
import {IDebouncedInputProps} from "./types";

const DebouncedInput: React.FC<IDebouncedInputProps> = ({value, onChange}): JSX.Element => {

  const [internalValue, setInternalValue] = useState<string>('');
  const [globalIntervalId, setGlobalIntervalId] = useState<any>(null);

  useEffect(() => {
    let intervalId: any = null;
    intervalId = setTimeout(() => {
      onChange(internalValue);
    }, 600);
    setGlobalIntervalId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [internalValue]);

  useEffect(() => {
    clearInterval(globalIntervalId);
    setInternalValue(value);
  }, [value])

  const inputHandle = (e: React.SyntheticEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setInternalValue(value);
  }

  return (
    <div>
      <input
        className="form-control"
        type="text"
        onChange={inputHandle}
        value={internalValue}
      />
    </div>
  )
}

export default DebouncedInput;
