import React from "react";

export function formatHotkeys(hotkeys: string) {
  const unicodeMap: { [key: string]: string } = {
    cmd: "⌘",
    meta: "⌘",
    ctrl: "⌃",
    alt: "⌥",
    opt: "⌥",
    shift: "⇧",
    enter: "⏎",
  };

  const formattedHotkeys = hotkeys
    .split("+")
    .map((key) => unicodeMap[key.trim()] || key.trim())
    .join("");

  return formattedHotkeys.toUpperCase();
}
