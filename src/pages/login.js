import RootLayout from "@/components/Layouts/RootLayout";
import Login from "@/components/UI/Login";

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
