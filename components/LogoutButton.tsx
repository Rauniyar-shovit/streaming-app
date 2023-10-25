"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <button onClick={() => signOut()} className="mt-20">
      Logout
    </button>
  );
};

export default LogoutButton;
