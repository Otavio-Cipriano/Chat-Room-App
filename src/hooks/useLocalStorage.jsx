import React, { useState } from 'react'

const prefix = 'ChatRoomApp'

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
          const item = localStorage.getItem(prefix + key);
          return item ? JSON.parse(item) : initialValue;
        } catch (err) {
          console.warn("Setting localStorage went wrong: ", err);
          return initialValue;
        }
      });

      const setValue = (value) => {
        try {
          const valueToStore =
            value instanceof Function ? value(storedValue) : value;
          setStoredValue(valueToStore);
          localStorage.setItem( prefix + key, JSON.stringify(valueToStore));
        } catch (error) {
          console.error(error);
        }
      };

    return [storedValue, setValue]
}

export default useLocalStorage;
