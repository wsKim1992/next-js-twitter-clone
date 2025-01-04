"use client";

import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";

export default function LoginInterceptor() {
  console.log("intercepted!");
  return <LoginModal />;
}
