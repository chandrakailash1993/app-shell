import { useEffect } from "react";

const useApp = () => {
  useEffect(() => {
    console.log("Test Hook");
  }, []);
};

export default useApp;
