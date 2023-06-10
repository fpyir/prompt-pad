"use client";
import React, { useEffect, useRef } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const AutoResizeTextArea: React.FC<TextAreaProps> = ({
  style,
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [props.value]);

  return (
    <textarea
      {...props}
      ref={textAreaRef}
      style={{
        ...style,
        overflow: "hidden",
        resize: "none",
      }}
    />
  );
};
