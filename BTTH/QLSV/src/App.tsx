import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./modules/home/Home";
import { ToastContainer } from "react-toastify";
import { StaffForm } from "./pages/StaffForm/PetForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/add" element={<StaffForm />} />
          <Route path="/update/:id" element={<StaffForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
