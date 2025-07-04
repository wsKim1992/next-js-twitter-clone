/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { type FC, use, type ReactNode, Suspense } from "react";
import { handlers } from "@/mocks/handlers";
const loadMSWPromise =
  window !== undefined
    ? import("@/mocks/browser").then(async ({ worker }) => {
        if (process.env.NODE_ENV === "production") return;
        await worker.start({
          onUnhandledRequest(request, print) {
            if (request.url.includes("_next")) {
              return;
            }
            print.warning();
          },
        });
        worker.use(...handlers);
        (module as any).hot?.dispose(() => {
          worker.stop();
        });
        console.log(worker.listHandlers());
      })
    : Promise.resolve();

export const MSWProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <MSWwrapper>{children}</MSWwrapper>
    </Suspense>
  );
};

const MSWwrapper: FC<{ children: ReactNode }> = ({ children }) => {
  use(loadMSWPromise);
  return <>{children}</>;
};
