"use client";
import Head from "next/head";
import DashboardLayout from "@/components/DashBoardLayout";
import useChild from "@/components/hooks/useChildren";
import Box from "@/components/Box";
import { useState } from "react";
import AddStoryModal from "@/components/AddStory";
import useStory from "@/components/hooks/useStory";

export default function ChildView({ params }: { params: any }) {
  const { story: storyId } = params;
  const { story } = useStory(storyId);
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Bedtime Story Generator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout title={story?.title}>
       {story?.content}
      </DashboardLayout>
    </div>
  );
}
