import PostCard from "@/components/dashboard/PostCard";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardContainer from "@/components/utils/DashboardContainer";
import React from "react";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <div className="header">
        <h1 className="text-2xl font-bold">Posts</h1>
      </div>
      <div>
        <PostCard />
      </div>
    </DashboardContainer>
  );
}
