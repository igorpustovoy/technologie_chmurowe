import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [numbers, setNumbers] = useState(null);

  useEffect(() => {
    const fetchNumber = async () => {
      const num = await axios
        .get("/api/numbers")
        .then((res) => {
          console.log(res.data);
          setNumbers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchNumber();
  }, []);

  return (
    <div className="App">
      {numbers}
      <button>XDDDD</button>
    </div>
  );
}

export default App;
