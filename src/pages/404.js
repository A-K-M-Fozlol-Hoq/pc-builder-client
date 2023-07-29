import { Result, Button } from "antd";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #1890ff, #531dab)",
      }}
    >
      <Head>
        <title>404 Not Found</title>
        <meta
          name="Not Found"
          content="Your requested content was not found."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Result
        status="404"
        title="404 - Page Not Found"
        subTitle="Sorry, the page you are looking for does not exist."
        extra={
          <Button type="primary" href="/">
            Back To Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFoundPage;
