import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import qs from "qs";
import { useState } from "react";
import toast from "react-hot-toast";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/user/login",
        qs.stringify({ email, password })
      );
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("Successfully logged in.");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (err) {
      toast.error("The email or password is incorrect.");
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-200">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-black">Login</h1>
            <p className="text-gray-500">Login to your account.</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link href="/auth/signup" legacyBehavior>
              <a className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800">
                Sign Up
              </a>
            </Link>
          </div>
        </form>
        <div className="absolute right-auto bottom-[60px]">
          <Link href="/">
            <Image
              src="https://pub-ebc3292441104a07b54e254192a1b246.r2.dev/default-monochrome-black.svg"
              width={100}
              height={100}
              alt="signup"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
