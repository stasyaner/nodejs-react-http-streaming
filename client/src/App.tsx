import { useEffect, useState } from "react";

const App = () => {
  const [res, setRes] = useState("");

  useEffect(() => {
    fetch("http://localhost:3422").then(async response => {
      const reader = response.body?.getReader();
      if (!reader) return;
      const decoder = new TextDecoder("utf-8");
      let result;
      while(!result?.done) {
        result = await reader.read();
        const text = decoder.decode(result.value);
        setRes(currRes => currRes + " " + text);
      }
    });
  }, []);

  return <h3>{res}</h3>;
};

export { App };
