import { type ReactNode } from "react";

const AfterLoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      애프터 로그인 레이아웃
      {children}
    </div>
  );
};

export default AfterLoginLayout;
