import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import qs from "qs";
import Head from "next/head";
import { UilArrowRight, UilInfoCircle } from "@iconscout/react-unicons";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default () => {
  const [verifyCode, setVerifyCode] = useState("");
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.APIBACKEND}/api/v1/user/verify-account`,
        qs.stringify({ verifyCode })
      );
      if (data) {
        toast.success("Successfully verified your account.");
        setTimeout(() => {
          window.location.href = "/auth/login";
        }, 2000);
      }
    } catch (error) {
      toast.error("The verification code is failed or has been expired.");
    }
  };
  const resendCode = async () => {
    try {
      const { data } = await axios.get(
        `/user/account-verify-code`
      );
      if (data) {
        toast.success("Successfully resend your verification code.");
        setTimeout(() => {
          window.location.href = "/auth/account-confirmation";
        }, 2000);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };
  return (
    <>
      <Head>
        <title>Account Confirmation</title>
      </Head>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-200">
        <div className="w-1/2 my-8 flex flex-col justify-center items-center text-lg md:flex-row md:text-xl md:justify-between">
          <ol className="space-y-4 w-72">
            <li>
              <div
                className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 shadow"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">1. Account Information</h3>
                </div>
              </div>
            </li>
            <li>
              <div
                className="w-full p-4 text-orange-700 bg-orange-100 border border-orange-300 rounded-lg shadow"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">2. Account Confirmation</h3>
                  <UilArrowRight size="26" />
                </div>
              </div>
            </li>
            <li>
              <div
                className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg shadow"
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <span className="sr-only">Congratulation</span>
                  <h3 className="font-medium">3. Congratulation!</h3>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form onSubmit={formSubmit}>
            <div
              className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50"
              role="alert"
            >
              <UilInfoCircle className="mr-2" size="66" />
              <span className="sr-only">Info</span>
              <div className="text-lg">
                A verification code has been sent to your email address. If you
                don't see it in your inbox, check your spam folder.
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="verifyCode"
              >
                Verify Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                required
                placeholder="Enter your verify code"
                onChange={(e) => setVerifyCode(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Complete
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-700 text-lg">
              Verification code not received?
            </p>
            <button className="text-orange-500 text-lg" onClick={resendCode}>
              Resend
            </button>
          </div>
        </div>
        <div className="absolute right-1/2 bottom-[60px] hidden md:block">
          <Link href='/'>
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
