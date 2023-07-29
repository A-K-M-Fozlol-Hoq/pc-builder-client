import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import ShowProducts from "@/components/UI/ShowProducts";
import dynamic from "next/dynamic";

const CpuProcessor = ({ productsData }) => {
  return (
    <>
      <Head>
        <title>Cpu/Processor</title>
      </Head>
      <h1
        style={{ textAlign: "center", fontSize: "40px", margin: "20px auto" }}
      >
        CPU/Processor
      </h1>
      <ShowProducts products={productsData} />
    </>
  );
};
export default CpuProcessor;

CpuProcessor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://assignment6-server.vercel.app/productBySlug/cpu_processor"
  );
  const productsData = await res.json();

  return {
    props: {
      productsData: productsData.data,
    },
    revalidate: 10,
  };
};
