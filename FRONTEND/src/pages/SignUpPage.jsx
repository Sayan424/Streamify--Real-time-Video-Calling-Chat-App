import React, { useState } from "react";

const SignUpPage = () => {
  const SignUpPage = () => {
    const [signupData, setSignupData] = useState({
      fullName: "",
      email: "",
      password: "",
    });

    const handleSignup = (e) => {
      e.preventDefault();
    };
  };
  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 primary"
      data-theme="mytheme"
    >
      <div className="border border-[#5C3C7D]/40 flex flex-col lg:flex-row w-full max-w-5xl mx-auto  rounded-xl shadow-bgshadow overflow-hidden">
        {/* signup form left side */}
        <div></div>
      </div>
    </div>
  );
};

export default SignUpPage;
