"use client";
import { useState } from "react";

export default function DotsColor() {
  const [active, setActive] = useState(2);
  const colors = ["bg-gray-100", "bg-gray-500", "bg-gray-900"];
  const outColors = [
    "outline-gray-100",
    "outline-gray-500",
    "outline-gray-900",
  ];

  return (
    <div className="flex gap-4">
      {colors.map((color, i) => (
        <div
          key={i}
          className={`size-10 cursor-pointer rounded-full ${color} ${active === i ? `outline-2 outline-offset-2 ${outColors[i]}` : ""} `}
          onClick={() => setActive(i)}
        />
      ))}
    </div>
  );
}
