"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
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
  };

  return (
    <section className="container mx-auto my-10 border rounded py-5 shadow-lg w-1/3">
      <div>
        <h1 className="text-4xl font-semibold text-center">Login</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>
      <div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 px-10 mx-auto py-10">
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>

            <Button className="bg-teal-500" type="submit">
              Submit
            </Button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-teal-500 hover:underline">
              Create an account
            </Link>
          </p>

          <p className="text-center mt-6 text-sm text-gray-500">Or Sign Up Using</p>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <Button
              className="flex items-center justify-center w-12 h-12  rounded-full shadow-md bg-teal-500"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "https://next-portfolio-bay.vercel.app/dashboard",
                })
              }
            >
              <FaGoogle />
            </Button>
            <Button
              className="flex items-center justify-center w-12 h-12 rounded-full shadow-md bg-teal-500"
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
