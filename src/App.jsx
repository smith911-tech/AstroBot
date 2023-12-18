import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preloader from "./Preloader";
function App() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });

  return (
    <>
    {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
        <Routes>

        </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App
