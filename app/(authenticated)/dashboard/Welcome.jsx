"use client";

import { useAuth } from "@/contexts/AuthContext";
import { theme } from "@/styles/theme";

function Welcome() {
  const { user, logout } = useAuth();

  if (!user) return <p>loading...</p>;
  const { userName, jobTitle, email, firstName, role } = user;

  return (
    <>
      <h1
        className={`text-2xl md:text-3xl font-inter font-extrabold text-[${theme.colors.text}] mb-2`}
      >
        Welcome back, {firstName}!
      </h1>
      <p
        className={`text-base font-inter md:text-lg text-[${theme.colors.textLabel}] mb-8`}
      >
        Here&apos;s what&apos;s happening with your clients today
      </p>
    </>
  );
}

export default Welcome;
