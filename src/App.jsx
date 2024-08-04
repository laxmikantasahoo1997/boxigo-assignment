import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import { Skeleton } from "@mui/material";

const Moves = lazy(() => import("./pages/Moves"));
const Profile = lazy(() => import("./pages/Profile"));
const Quote = lazy(() => import("./pages/Quote"));
const Logout = lazy(() => import("./pages/Logout"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton variant="rectangular" height={500} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Moves />} />
            <Route path="profile" element={<Profile />} />
            <Route path="quote" element={<Quote />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
