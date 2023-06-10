import React, { HTMLInputTypeAttribute } from "react";
import classNames from "classnames";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { useField } from "react-final-form";
import { FieldValidator } from "final-form";

export type TextInputProps = {
  icon?: React.ReactNode;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  validate?: FieldValidator<string>;
  placeholder?: string;
  containerClassName?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  icon,
  label,
  name,
  type,
  validate,
  placeholder,
  containerClassName,
}) => {
  const {
    input,
    meta: { touched, error, active },
  } = useField(name, { validate });

  const isInvalid = touched && error && !active;

  const inputClass = classNames(
    "block w-full rounded-md border-0 py-1.5 sm:text-sm sm:leading-6 pl-4",
    {
      "text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600":
        !isInvalid,
      "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500":
        isInvalid,
    }
  );

  return (
    <div className={containerClassName}>
      <label
        htmlFor={name}
        className="text-sm font-medium leading-6 text-gray-900 flex items-center"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          {...input}
          type={type}
          id={name}
          className={inputClass}
          placeholder={placeholder}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? `${name}-error` : undefined}
        />
        {isInvalid && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {isInvalid && error && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};
