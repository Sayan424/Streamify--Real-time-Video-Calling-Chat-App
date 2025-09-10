import React from "react";
import { Route, Routes } from "react-router";
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
  const { data, isLoading, isError } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");

      return res.data;
    },
  });
  console.log(data);

  return (
    <div className="h-screen " data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/notifications" element={<NotificationsPage />}></Route>
        <Route path="/call" element={<CallPage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/onboarding" element={<OnboardingPage />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
