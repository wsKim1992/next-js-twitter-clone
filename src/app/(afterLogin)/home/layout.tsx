import { ReactNode } from "react";
import { LayoutContainer } from "./_component/Common.style";
export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
