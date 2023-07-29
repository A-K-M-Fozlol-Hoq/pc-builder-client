import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import ShowProducts from "@/components/UI/ShowProducts";
import dynamic from "next/dynamic";

const Others = ({ productsData }) => {
  return (
    <>
      <Head>
        <title>Others</title>
      </Head>
      <h1
        style={{ textAlign: "center", fontSize: "40px", margin: "20px auto" }}
      >
        Others
      </h1>
      <ShowProducts products={productsData} />
    </>
  );
};
export default Others;

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://assignment6-server.vercel.app/productBySlug/others"
  );
  const productsData = await res.json();

  return {
    props: {
      productsData: productsData.data,
    },
    revalidate: 10,
  };
};
