"use client";

import { Button } from "@/widgets/button";
import Image from "next/image";
import { Form } from "react-final-form";

export default function Login() {
  const onSubmit = (values) => {
    console.log(values); // Replace with actual form submission
  };

  const handleGoogleAuth = () => {
    // Perform Google authentication logic here
  };

  const handleGithubAuth = () => {
    // Perform GitHub authentication logic here
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
        <div className="flex justify-center">
          <button className="bg-white shadow-md text-slate-500 font-semibold py-3 px-8 rounded flex items-center space-x-2 border">
            <Image
              src="/google-logo.svg"
              width={24}
              height={24}
              className="mr-4"
              alt="Google Logo"
            />
            <span>Sign in with Google</span>
          </button>
        </div>

        <div className="flex justify-center">
          <button className="bg-white shadow-md text-slate-500 font-semibold py-3 px-8 rounded flex items-center space-x-2 border">
            <Image
              src="/github-logo.svg"
              width={24}
              height={24}
              alt="Github Logo"
              className="mr-4"
            />
            <span>Sign in with Github</span>
          </button>
        </div>
      </div>
    </div>
  );
}
