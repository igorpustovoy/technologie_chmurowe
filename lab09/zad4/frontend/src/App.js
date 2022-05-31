import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const mess = await axios
        .get("http://localhost:30020/")
        .then((res) => {
          console.log(res.data);
          setMessage(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchMessage();
  }, []);

  return (
    <div className="App">
      Działa
      {message}
    </div>
  );
}

export default App;
