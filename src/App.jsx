import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ResForm from "./components/ResForm/ResForm";
import Checkout from "./components/Checkout/Checkout";
import LoginPage from "./pages/Login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductPage from "./pages/ProductPage/ProductPage";
import AddressForm from "./components/AddressForm/AddressForm";
import Profile from "./pages/Profile/Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );
  const [isLoading, setIsLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  // Determine whether to hide the navbar or footer
  const shouldHideNavbar = ["/", "/register"].includes(location.pathname);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Validate token with API call
      fetch("/api/auth/validate", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          if (res.ok) setIsLoggedIn(true);
          else throw new Error("Invalid token");
        })
        .catch(() => {
          setIsLoggedIn(false);
          localStorage.removeItem("token");
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {showLogin && <LoginPage setIsLoggedIn={setIsLoggedIn} />}
      <div className={`app ${shouldHideNavbar ? "no-navbar" : ""}`}>
        {!shouldHideNavbar && (
          <Navbar
            setShowLogin={setShowLogin}
            setIsLoggedIn={setIsLoggedIn}
            pageTitle={location.pathname === "/profile" ? "My Profile" : null}
          />
        )}
        <div className="app-body">
          <Routes>
            <Route
              path="/"
              element={<LoginPage setIsLoggedIn={setIsLoggedIn} page="signin" />}
            />
            <Route
              path="/register"
              element={<LoginPage setIsLoggedIn={setIsLoggedIn} page="signup" />}
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} isLoading={isLoading}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} isLoading={isLoading}>
                  <ProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/address"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} isLoading={isLoading}>
                  <AddressForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reservation"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} isLoading={isLoading}>
                  <ResForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} isLoading={isLoading}>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} isLoading={isLoading}>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </div>
      </div>
      {<Footer />}
    </div>
  );
};

export default App;
