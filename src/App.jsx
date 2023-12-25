import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preloader from "./Preloader";
import Home from "./Home";
import Team from "./Team";
import DiscordH from "./discordh";

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
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/discordh" element={<DiscordH />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App