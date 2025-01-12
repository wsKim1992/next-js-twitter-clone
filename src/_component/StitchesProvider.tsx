"use client";
import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { css } from "@stitches/react";

const StitchesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isRendered, setIsRendered] = useState(false);
  useServerInsertedHTML(() => {
    if (!isRendered) {
      const cssObj = css();
      console.log({ cssObj });

      setIsRendered(true);
      return (
        <style id="stitches" dangerouslySetInnerHTML={{ __html: cssObj }} />
      );
    }
  });
  return <>{children}</>;
};

export default StitchesProvider;
