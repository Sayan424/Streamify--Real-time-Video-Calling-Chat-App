import React from "react";
3;
import useAuthUser from "../hooks/useAuthUser.js";
import { Link, useLocation } from "react-router";
import { HomeIcon, Webhook } from "lucide-react";

const Sidebar = () => {
  const { authUser } = useAuthUser();

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-64 bg-base-200 hidden lg:flex flex-col h-screen sticky top-0 border-r border-baseColor">
      <div className="p-5 border-b border-baseColor">
        <Link to="/" className="flex items-center gap-2.5">
          <Webhook className="size-9 text-baseColor" />
          <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-baseColor to-gradient tracking-wider">
            Streamify
          </span>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <Link
          to="/"
          className={`btn btn-ghost justify-start w-full gap-3 normal-case ${
            currentPath === "/" ? "btn-active" : ""
          }`}
        >
          <HomeIcon className="size-5 text-base-content opacity-70" />
          <span>Home</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
