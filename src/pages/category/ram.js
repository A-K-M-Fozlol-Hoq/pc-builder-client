import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import ShowProducts from "@/components/UI/ShowProducts";

const Ram = ({ productsData }) => {
  return (
    <>
      <Head>
        <title>Ram</title>
      </Head>
      <h1
        style={{ textAlign: "center", fontSize: "40px", margin: "20px auto" }}
      >
        Ram
      </h1>
      <ShowProducts products={productsData} />
    </>
  );
};
export default Ram;

Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://assignment6-server.vercel.app/productBySlug/ram"
  );
  const productsData = await res.json();

  return {
    props: {
      productsData: productsData.data,
    },
    revalidate: 10,
  };
};
