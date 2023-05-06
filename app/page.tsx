"use client"; // this is a client component 👈🏽
import Head from "next/head";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Bedtime Story Generator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">FunTales</div>
            </div>
            <div className="flex items-center">
              <Link href="/login">
                <span className="text-gray-500 hover:text-gray-700 ml-4">
                  Log in
                </span>
              </Link>
              <Link href="/register">
                <span className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Sign up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Personalized bedtime stories
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Make bedtime magical with stories that are tailored to your
              child&apos;s interests and values.
            </p>
            <div className="mt-5 max-w-2xl mx-auto sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Link href="/register">
                  <span className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center my-5">
            <h2 className="text-3xl font-extrabold text-gray-900">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Looking for a fun and educational way to help your child wind down
              for the night? Our app creates personalized bedtime stories
              tailored specifically to your child's interests and values. Our
              cutting-edge technology generates unique stories that are sure to
              keep your child entertained while reinforcing the values you want
              to instill in them. Say goodbye to boring bedtime routines and
              hello to a night full of wonder and imagination!
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-gray-400 text-base">
              &copy; 2023 Bedtime Stories, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
