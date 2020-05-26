import { useRef, useEffect } from 'react';

export function usePreviousValue<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
