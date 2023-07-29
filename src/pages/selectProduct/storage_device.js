import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import ShowProducts from "@/components/UI/ShowProducts";
import dynamic from "next/dynamic";

const StorageDevice = ({ productsData }) => {
  return (
    <>
      <Head>
        <title>Storage Device</title>
      </Head>
      <h1
        style={{ textAlign: "center", fontSize: "40px", margin: "20px auto" }}
      >
        Storage Device
      </h1>
      <ShowProducts products={productsData} showAddToBuild={true} />
    </>
  );
};
export default StorageDevice;

StorageDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://assignment6-server.vercel.app/productBySlug/storage_device"
  );
  const productsData = await res.json();

  return {
    props: {
      productsData: productsData.data,
    },
  };
};
