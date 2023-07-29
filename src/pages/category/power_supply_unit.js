import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import ShowProducts from "@/components/UI/ShowProducts";
import dynamic from "next/dynamic";

const PowerSupplyUnit = ({ productsData }) => {
  return (
    <>
      <Head>
        <title>Power Supply Unit</title>
      </Head>
      <h1
        style={{ textAlign: "center", fontSize: "40px", margin: "20px auto" }}
      >
        Power Supply Unit
      </h1>
      <ShowProducts products={productsData} />
    </>
  );
};
export default PowerSupplyUnit;

PowerSupplyUnit.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://assignment6-server.vercel.app/productBySlug/power_supply_unit"
  );
  const productsData = await res.json();

  return {
    props: {
      productsData: productsData.data,
    },
    revalidate: 10,
  };
};
