"use client";
import Head from "next/head";
import DashboardLayout from "@/components/DashBoardLayout";
import useChild from "@/components/hooks/useChildren";
import Box from "@/components/Box";
import { useState } from "react";
import AddStoryModal from "@/components/AddStory";

export default function ChildView({ params }: { params: any }) {
  const { child } = useChild(params.id);
  const [isOpenModal, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Bedtime Story Generator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout title={`Your stories ${child?.name}`}>
        {child?.stories?.length ? (
          <div className="flex flex-col my-2">
            {child.stories.map((story: any) => (
              <Box key={story.id} name={story.title} link={`/child/story/${story.id}`} />
            ))}
            <button
              style={{ marginTop: 10 }}
              onClick={() => setModalOpen(true)}
              className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Create new story
            </button>
          </div>
        ) : (
          <button
            style={{ marginTop: 10 }}
            onClick={() => setModalOpen(true)}
            className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Create new story
          </button>
        )}

        <AddStoryModal
          isOpen={isOpenModal}
          kid={child}
          onClose={() => setModalOpen(false)}
        />
      </DashboardLayout>
    </div>
  );
}
