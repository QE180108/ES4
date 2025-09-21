import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function usePersistedState<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    AsyncStorage.getItem(key).then((value) => {
      if (value) setState(JSON.parse(value));
    });
  }, [key]);

  const setPersistedState = (value: T) => {
    setState(value);
    AsyncStorage.setItem(key, JSON.stringify(value));
  };

  return [state, setPersistedState];
}
