import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";

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
  return <RouterProvider router={Router} />;
}

export default App;
