import DashboareLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

const Dashboard = ({ selectedButton }) => {
  return (
    <div>
      <h1>This is dashboard page-{selectedButton}</h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboareLayout>{page}</DashboareLayout>;
};
