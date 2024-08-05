"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/store/actions/userActions";
import { useAppDispatch } from "@/store/reduxHook";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [full_name, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const action = await dispatch(createUser({ full_name, password }));

      if (createUser.fulfilled.match(action)) {
        router.push("/");
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      setError("An error occurred while registering.");
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 md:px-8 py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-screen-md w-full">
        <h2 className="mb-1 text-2xl font-bold text-black sm:text-title-xl2">
          Sign Up
        </h2>
        <h4 className="mb-4 text-black">Create your account</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Full Name"
                className="w-full rounded-lg border text-black border-black placeholder-black py-4 pl-6 pr-10"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full rounded-lg border text-black border-black placeholder-black py-4 pl-6 pr-10"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md border hover:bg-gray-200 px-10 py-4 text-center font-semibold text-black"
            >
              Sign Up
            </button>
          </div>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
