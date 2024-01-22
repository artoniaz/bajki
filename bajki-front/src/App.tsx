import { useEffect } from "react";

function App() {
  const fetchTale = async () => {
    const response = await fetch("/api/tales/" + "65ac3218ff578739782d851e");
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      return data;
    }
  };

  useEffect(() => {
    console.log("test");

    fetchTale();
  });
  return <div className="App">test</div>;
}

export default App;
