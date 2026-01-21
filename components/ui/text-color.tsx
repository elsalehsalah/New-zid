"use client";

import React from "react";
import { Plus } from "lucide-react";

interface TextColorProps {
  words: string[];
  prefix?: string;
}

export function TextColor({ words, prefix }: TextColorProps) {
  return (
    <div>
      <div className="mb-10 mt-4 md:mt-6">
        <div className="px-2">
          <div className="relative p-4 md:p-8 w-full h-full">
            <h1 className="tracking-tighter flex select-none px-2 md:px-3 py-2 flex-col text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none md:flex-row font-heading items-center justify-center flex-wrap gap-2 md:gap-4">

              {prefix && (
                <span className="text-white mr-4">
                  {prefix}
                </span>
              )}

              {words.map((word, index) => {
                const gradientIndex = (index % 3) + 1;
                return (
                  <span
                    key={index}
                    data-content={word}
                    className={`before:animate-gradient-background-${gradientIndex} relative before:absolute before:bottom-4 before:left-0 before:top-0 before:z-0 before:w-full before:px-1 before:content-[attr(data-content)] sm:before:top-0`}
                  >
                    <span className={`from-gradient-${gradientIndex}-start to-gradient-${gradientIndex}-end animate-gradient-foreground-${gradientIndex} bg-gradient-to-r bg-clip-text px-1 sm:px-2 md:px-3 text-transparent`}>
                      {word}
                    </span>
                  </span>
                );
              })}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

