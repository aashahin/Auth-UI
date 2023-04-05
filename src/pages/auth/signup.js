import Head from "next/head";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import qs from "qs";
import { useState } from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import Image from "next/image";
import {Text} from "@nextui-org/react";

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(0);
  const [passwordConfirmation, setPasswordConfirmation] = useState(0);
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `/user/signup`,
        qs.stringify({
          firstName,
          lastName,
          email,
          password,
          passwordConfirmation,
        })
      );
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("Successfully created an account.");
        setTimeout(() => {
          window.location.href = "/auth/account-confirmation";
        }, 1000);
      }
    } catch (error) {
      if (error.response.data.error[0]) {
        if (error.response.data.error[0].msg === "User Already exist.") {
          return toast.error("Email already exists.");
        } else if (
          error.response.data.error[0].msg ===
          "Password confirmation does not match password"
        ) {
          return toast.error("Password confirmation does not match password");
        }
      }
      if (error.response.data.message === "Password is not strong enough") {
        return toast.error("Password is not strong enough");
      }
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-200">
        <div className="w-1/2 pt-8 my-8 flex flex-col justify-center items-center text-lg md:flex-row md:text-xl md:justify-between">
          <ol className="space-y-4 w-72">
              <div
                className="w-full p-4 text-orange-700 bg-orange-100 border border-orange-300 rounded-lg shadow"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <Text h3 className="font-medium">1. Account Information</Text>
                  <UilArrowRight size="26" />
                </div>
              </div>
              <div
                className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <Text h3 className="font-medium">2. Account Confirmation</Text>
                </div>
              </div>
              <div
                className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <Text h3 className="font-medium">3. Congratulation!</Text>
                </div>
              </div>
          </ol>
        </div>
        <div className="w-full max-w-md">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={formSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                required
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                required
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                required
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                required
                placeholder="Confirm Password"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Next
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Text p className="text-gray-700 text-lg">Already have an account?</Text>
              <Link href="/auth/login" className="text-orange-500 text-lg">
                Login
              </Link>
            </div>
          </form>
        </div>
        <div className="absolute right-1/2 bottom-[60px] hidden md:block">
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
