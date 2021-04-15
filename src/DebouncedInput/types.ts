export interface DebouncedInputProps {
  value: string;
  onChange: (value: string) => void;
  timeout: number;
}

export type TimeoutID = ReturnType<typeof setTimeout> | null;
