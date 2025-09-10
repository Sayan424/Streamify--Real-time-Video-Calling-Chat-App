import React from "react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "./lib/axios.js";

const App = () => {
  //tenstack query
  const {
    data: authData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");

      return res.data;
    },
  });
  const authUser = authData?.user;

  return (
    <div className="h-screen " data-theme="night">
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        ></Route>
        {/*authenticated user -> homePage & non-authenticated user-> loginPage */}
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        ></Route>
        {/*non-authenticated user-> signUpPage & authenticated user -> homePage   */}

        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        ></Route>
        {/*non-authenticated user-> loginPage & authenticated user -> homePage   */}

        <Route
          path="/notifications"
          element={authUser ? <NotificationsPage /> : <Navigate to="/login" />}
        ></Route>
        {/*authenticated user -> NotificationsPage & non-authenticated user-> loginPage */}

        <Route
          path="/call"
          element={authUser ? <CallPage /> : <Navigate to="/login" />}
        ></Route>
        {/*authenticated user -> CallPage & non-authenticated user-> loginPage */}

        <Route
          path="/chat"
          element={authUser ? <ChatPage /> : <Navigate to="/login" />}
        ></Route>
        {/*authenticated user -> ChatPage & non-authenticated user-> loginPage */}

        <Route
          path="/onboarding"
          element={authUser ? <OnboardingPage /> : <Navigate to="/login" />}
        ></Route>
        {/*authenticated user -> OnboardingPage & non-authenticated user-> loginPage */}
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
