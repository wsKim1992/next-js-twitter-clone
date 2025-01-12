"use client";
import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { getCssText } from "@/stitches.config";

const StitchesProvider = ({ children }: { children: React.ReactNode }) => {
  useServerInsertedHTML(() => {
    return (
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    );
  });
  return <>{children}</>;
};

export default StitchesProvider;
