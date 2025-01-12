"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Main from "../_component/Main";
const Login = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/i/flow/login");
  }, [router]);
  return <Main />;
};

export default Login;
