import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { login } from "../lib/api.js";
import { Webhook } from "lucide-react";
import { Link } from "react-router";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const queryClient = useQueryClient();

  const {
    mutate: loginMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      data-theme="forest"
    >
      <div className="border border-neutral/40 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg--100 rounded-xl shadow-bgshadow overflow-hidden">
        {/* login form */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* logo */}
          <div className="mb-4 flex items-center justify-start gap-3">
            <Webhook className="text-baseColor size-9  self-center" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-baseColor to-gradient tracking-wider">
              Streamify
            </span>
          </div>

          {/* error message display */}

          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

          {/* login form */}
          <div className="w-full">
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {/* Real talk. Real faces. Real time. */}
                    Welcome back to Streamify
                  </h2>
                  <p className="text-sm opacity-70 w-full">
                    Streamify brings your conversations to life{" "}
                    <b>face to face</b>
                  </p>
                </div>
                {/* email */}
                <div className="flex flex-col gap-4">
                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="johnwick123@gmail.com"
                      className="input input-bordered w-full"
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="******"
                      className="input input-bordered w-full"
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-baseColor text-white font-bold py-3 px-4 rounded-xl hover:bg-opacity-90 transition duration-200 w-full mt-5"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <span className="loading loading-spinner loading-xs"></span>
                        Signing in.....
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                  <div className=" text-center mt-4">
                    <p className="text-sm">
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        className="text-baseColor hover:text-gradient font-semibold"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* image section */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-baseColor/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* illlustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/ii.png"
                alt="language connection illlustration"
                className="w-full h-full"
              />
            </div>
            <div className="text-center space-y-3  mt-6">
              <h2 className="text-xl font-semibold">
                Connect with others worldwide
              </h2>
              <p className="opacity-70">Chat & video call whatever you want</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
