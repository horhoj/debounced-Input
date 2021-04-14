import {ChangeEvent, FC, useEffect, useState} from "react";
import {IDebouncedInputProps, TimeoutID} from "./types";

export const DebouncedInput: FC<IDebouncedInputProps> = ({value, onChange, timeout}) => {

  const [internalValue, setInternalValue] = useState<string>('');
  const [globalIntervalId, setGlobalIntervalId] = useState<TimeoutID>(null);

  useEffect(() => {
    const intervalId: TimeoutID = setTimeout(() => {
      onChange(internalValue);
    }, timeout);
    setGlobalIntervalId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [internalValue]);

  useEffect(() => {
    if (globalIntervalId) clearInterval(globalIntervalId);
    setInternalValue(value);
  }, [value]);

  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => setInternalValue(e.target.value);


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

