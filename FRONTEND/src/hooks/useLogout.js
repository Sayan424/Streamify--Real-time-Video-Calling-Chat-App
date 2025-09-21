import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { logout } from "../lib/api";
import useAuthUser from "./useAuthUser";

const useLogout = () => {
  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();
  const {
    mutate: logoutMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: logout,
    onSuccess: () => queryClient.invalidateQueries({ querykey: ["authUser"] }),
  });

  return { logoutMutation, isPending, error };
};

export default useLogout;
