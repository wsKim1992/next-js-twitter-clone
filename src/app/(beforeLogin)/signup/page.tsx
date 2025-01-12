"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Main from "../_component/Main";

const SignUp = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/i/flow/signup");
  }, [router]);
  return <Main />;
};

export default SignUp;
