import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import ShowProducts from "@/components/UI/ShowProducts";
import dynamic from "next/dynamic";
import ShowCategories from "@/components/UI/ShowCategories";

const HomePage = ({ featuredProducts, featuredCategories }) => {
  const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>PC Builder</title>
        <meta name="description" content="This is a pc builder website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      <h1
        style={{ textAlign: "center", fontSize: "40px", margin: "20px auto" }}
      >
        Featured Products
      </h1>
      <ShowProducts products={featuredProducts} />
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          margin: "50px auto",
        }}
      >
        Featured Categories
      </h1>
      <ShowCategories categories={featuredCategories} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://assignment6-server.vercel.app/featuredProducts"
  );
  const productsData = await res.json();

  const categoriesRes = await fetch(
    "https://assignment6-server.vercel.app/featuredCategories"
  );
  const categoriesData = await categoriesRes.json();

  return {
    props: {
      featuredProducts: productsData.data,
      featuredCategories: categoriesData.data,
    },
    revalidate: 10,
  };
};
