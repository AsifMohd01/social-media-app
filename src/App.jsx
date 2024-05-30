import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import ProfilePage from "./pages/profilePage/profilePage";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import "./App.css";
import Reel from "./pages/Reels/Reel.jsx";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              {/* <Route
                path="/home"
                element={isAuth ? <HomePage /> : <Navigate to="/" />}
              /> */}
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/profile/:userId"
                // element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
                element={<ProfilePage />}
              />
              <Route path="/reels" element={<Reel />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
