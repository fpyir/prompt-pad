import React from "react";
import classNames from "classnames";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export type TextInputProps = {
  icon?: React.ReactNode;
  label: string;
  id: string;
  onChange: (value: string) => void;
  value: string;
  valid: boolean;
  errorMessage?: string;
  placeholder?: string;
  containerClassName?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  icon,
  label,
  id,
  onChange,
  value,
  valid,
  errorMessage,
  placeholder,
  containerClassName,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const inputClass = classNames(
    "block w-full rounded-md border-0 py-1.5 sm:text-sm sm:leading-6",
    {
      "text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600":
        valid,
      "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500":
        !valid,
    }
  );

  return (
    <div className={containerClassName}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 flex items-center"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name={id}
          id={id}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          aria-invalid={!valid}
          aria-describedby={!valid ? `${id}-error` : undefined}
        />
        {!valid && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {!valid && errorMessage && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};
