"use client";

import { Button } from "@/widgets/button";
import { TextInput } from "@/widgets/text-input";
import { Form } from "react-final-form";

export default function Login() {
  const onSubmit = (values) => {
    console.log(values); // Replace with actual form submission
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

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              <TextInput
                name="email"
                type="email"
                label="Email address"
                placeholder="Enter your email"
                validate={(value) => (!value ? "Email is required" : undefined)}
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                validate={(value) =>
                  !value ? "Password is required" : undefined
                }
              />

              <div>
                <Button type="submit" variant="primary" className="w-full">
                  Sign in
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}
