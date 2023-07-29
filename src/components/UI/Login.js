import { GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login at PC Builder</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN USING GITHUB</h3>
        <div className={styles.social_icons}>
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://pc-builder-omega-flame.vercel.app/",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
