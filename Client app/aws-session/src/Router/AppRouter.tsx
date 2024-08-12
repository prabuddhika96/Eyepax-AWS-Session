import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import FeaturePage from "../layouts/FeaturePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <FeaturePage>
              <Home />
            </FeaturePage>
          }
        />
        <Route
          path="/contact"
          element={
            <FeaturePage>
              <ContactUs />
            </FeaturePage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
