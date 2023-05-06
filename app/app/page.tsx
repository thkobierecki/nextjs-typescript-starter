"use client";
import Head from "next/head";
import DashboardLayout from "@/components/DashBoardLayout";
import useUser from "@/components/hooks/useUser";
import Box from "@/components/Box";
import { useState } from "react";
import AddKidModal from "@/components/AddKid";
// import { unstable_getServerSession } from "next-auth/next";

export default function App() {
  // const session = await unstable_getServerSession();
  // console.log(session )
  const { user } = useUser();
  const [isOpenModal, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Bedtime Story Generator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout title="Your stories">
        <div className="flex flex-col my-2">
          <h2 style={{ marginBottom: 10}}>Your children</h2>
          {user?.children?.length > 0 ? (
            <div className="flex flex-col space-y-10">
              <div className="flex flex-col md:flex-row ">
                {user?.children.map((child: any) => (
                  <Box key={child.id} name={child.name} link={`/child/${child.id}`} />
                ))}
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Add child
              </button>
            </div>
          ) : (
            <button
              onClick={() => setModalOpen(true)}
              className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Add child
            </button>
          )}
        </div>
        <AddKidModal
          isOpen={isOpenModal}
          id={user?.id}
          onClose={() => setModalOpen(false)}
        />
      </DashboardLayout>
    </div>
  );
}
