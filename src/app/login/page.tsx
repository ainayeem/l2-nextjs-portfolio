"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   // formState: { errors },
  // } = useForm<FormValues>({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  //   const router = useRouter();

  // const onSubmit = async (data: FormValues) => {
  //   console.log(data);
  //   reset();
  //   try {
  //     const res = await loginUser(data);
  //     console.log(res);
  //     if (res.accessToken) {
  //       alert(res.message);
  //       localStorage.setItem("accessToken", res.accessToken);
  //       router.push("/");
  //     }
  //   } catch (err: any) {
  //     console.error(err.message);
  //     throw new Error(err.message);
  //   }
  // };

  return (
    <section className="container mx-auto my-auto sm:my-16 lg:my-32 border rounded py-5 shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
      <div>
        <h1 className="text-4xl font-semibold text-center">Login</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>
      <div>
        {/* Login Form */}
        <div className="mt-6">
          {/* Social Login Buttons */}
          <div className="flex flex-col gap-4 mt-4 space-y-5 px-5">
            <Button
              className="flex items-center justify-center h-12 w-full shadow-md bg-teal-500"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "https://next-portfolio-bay.vercel.app/dashboard",
                })
              }
            >
              <FaGoogle />
            </Button>
            <Button
              className="flex items-center justify-center h-12 w-full shadow-md bg-teal-500"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "https://next-portfolio-bay.vercel.app/dashboard",
                })
              }
            >
              <FaGithub />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
