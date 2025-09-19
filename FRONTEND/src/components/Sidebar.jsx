import React from "react";
3;
import useAuthUser from "../hooks/useAuthUser.js";
import { Link, useLocation } from "react-router";
import { BellIcon, HomeIcon, UsersIcon, Webhook } from "lucide-react";

const Sidebar = () => {
  const { authUser } = useAuthUser();

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-64 bg-base-200 hidden lg:flex flex-col h-screen sticky top-0 border-r border-baseColor">
      <div className="p-5 border-b border-base-300">
        <Link to="/" className="flex items-center gap-2.5">
          <Webhook className="size-9 text-baseColor" />
          <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-baseColor to-gradient tracking-wider">
            Streamify
          </span>
        </Link>
      </div>
      <nav className="flex-1 p-6 space-y-6 mt-1">
        <Link
          to="/"
          className={`btn btn-ghost bg-baseColor justify-start w-full gap-3 normal-case ${
            currentPath === "/" ? "btn-active" : ""
          }`}
        >
          <HomeIcon className="size-5 text-base-content opacity-70" />
          <span>Home</span>
        </Link>

        <Link
          to="/friends"
          className={`btn btn-ghost bg-baseColor justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/friends" ? "btn-active" : ""
          }`}
        >
          <UsersIcon className="size-5 text-base-content opacity-70" />
          <span>Friends</span>
        </Link>

        <Link
          to="/notifications"
          className={`btn btn-ghost bg-baseColor justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/notifications" ? "btn-active" : ""
          }`}
        >
          <BellIcon className="size-5 text-base-content opacity-70" />
          <span>Notifications</span>
        </Link>
      </nav>
      {/* user profile section */}
      <div className="p-4 border-t border-baseColor mt-auto shadow-baseColor">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={authUser?.profilePic} alt="User Avatar" />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">{authUser?.fullName}</p>
            <p className="text-xs text-success flex items-center gap-1">
              <span className="size-2 rounded-full bg-success inline-block" />
              Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
