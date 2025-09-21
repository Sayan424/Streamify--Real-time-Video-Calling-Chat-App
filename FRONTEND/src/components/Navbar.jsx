import React from "react";
import useAuthUser from "../hooks/useAuthUser";
import { Link, useLocation } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../lib/api";
import { BellIcon, LogOutIcon, Webhook } from "lucide-react";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  // const queryClient = useQueryClient();
  // const { mutate: logoutMutation } = useMutation({
  //   mutationFn: logout,
  //   onSuccess: () => queryClient.invalidateQueries({ querykey: ["authUser"] }),
  // });

  return (
    <nav className="bg-baseColor border border-baseColor sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-end w-full space-x-6">
          {/* logo only if in chat page */}
          {isChatPage && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <Webhook className="size-9 text-baseColor " />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r  from-baseColor to-gradient tracking-wider">
                  Streamify
                </span>
              </Link>
            </div>
          )}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to={"/notifications"}>
              <button className="btn btn-circle btn-outline text-[#000] ">
                <BellIcon className="h-6 w-6  opacity-70 text-[#000]" />
              </button>
            </Link>
          </div>
          {/* user avatar */}
          <div className="avatar">
            <div className="w-9 h-9 rounded-full">
              <img src={authUser?.profilePic} alt="Avatar" rel="noreferrer" />
            </div>
          </div>
          {/* logout button */}
          <button
            className="btn btn-circle btn-outline text-[#000]"
            onClick={logoutMutation}
          >
            <LogOutIcon className="h-6 w-6  opacity-70 text-[#000]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
