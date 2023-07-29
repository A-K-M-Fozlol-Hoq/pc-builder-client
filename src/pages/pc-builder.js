import PCBuilder from "@/components/UI/PCBuilder/PCBuilder";
import React from "react";
import { useSession } from "next-auth/react";
import Login from "@/components/UI/Login";
import RootLayout from "@/components/Layouts/RootLayout";

const PCBuilderPage = () => {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div>
        <PCBuilder />
      </div>
    );
  } else {
    return <Login />;
  }
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
