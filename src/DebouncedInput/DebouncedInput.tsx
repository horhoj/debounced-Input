import { ChangeEvent, FC, useEffect, useState } from 'react';
import { DebouncedInputProps, TimeoutID } from './types';

export const DebouncedInput: FC<DebouncedInputProps> = ({
  value,
  onChange,
  timeout,
}) => {
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
  }, [internalValue, onChange, timeout]);

  useEffect(() => {
    if (globalIntervalId) {
      clearInterval(globalIntervalId);
    }
    setInternalValue(value);
    // eslint-disable-next-line
  }, [value]);

  const inputHandle = (e: ChangeEvent<HTMLInputElement>) =>
    setInternalValue(e.target.value);

  return (
    <div>
      <input
        className="form-control"
        type="text"
        onChange={inputHandle}
        value={internalValue}
      />
    </div>
  );
};
