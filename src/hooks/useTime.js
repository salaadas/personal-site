import { useEffect, useState } from 'react';

const useTime = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const getHoChiMinhTime = () => {
      const d = new Date();
      const utc = d.getTime() + d.getTimezoneOffset() * 60 * 1000;
      const newD = new Date(utc + 1000 * 60 * 60 * 7);
      setTime(newD.toLocaleTimeString());
    };

    const interval = setInterval(getHoChiMinhTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return time;
};

export default useTime;
