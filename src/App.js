import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";

import MainPage from "./pages/main/MainPage";
import NotFoundPage from "./pages/errors/NotFoundPage";


function App() {
  return (
    <HashRouter>

      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
      </Routes>

    </HashRouter>
  );
}

export default App;
