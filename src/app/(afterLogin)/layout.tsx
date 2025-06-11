import { type ReactNode } from "react";
import AfterLoginLayout from "./_component/AfterLoginLayout";
const AfterLogin = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return <AfterLoginLayout modal={modal}>{children}</AfterLoginLayout>;
};

export default AfterLogin;
