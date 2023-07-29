import { Col, Row, Rate } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";
import styles from "../../styles/ProductDetailsPage.module.css"; // Import custom CSS module for styling
import { useState } from "react";

const ProductDetailsPage = ({ product }) => {
  const [individualRating, setIndividualRating] = useState(0);
  if (product && product.name) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            alt={product.name}
            src={product.image}
            className={styles.image}
          />
          <h1 className={styles.title}>{product.name}</h1>
          <p>
            <b>Category:</b> {product.category}
          </p>
          <p>
            <b>Description:</b> {product.description}
          </p>
          <p>
            <b>Status:</b> {product.status}
          </p>
          <p>
            <b>Price:</b> ${product.price}
          </p>
          <div className={styles.featuresTitle}>Key Features:</div>
          <ul className={styles.featuresList}>
            {product.keyFeatures.map((feature, index) => (
              <li key={index}>{`${index + 1}. ${feature}`}</li>
            ))}
          </ul>

          <div>
            <ul className={styles.ratingTitle}>
              Average Rating:{" "}
              <Rate disabled allowHalf defaultValue={product.rating} />
            </ul>
            <p>Average Rating: {product.rating} Stars</p>
          </div>
          <div>
            <ul className={styles.ratingTitle}>
              Individual Rating:{" "}
              <Rate
                onChange={(value) => setIndividualRating(value)}
                allowHalf
                defaultValue={0}
              />
            </ul>
            <p>Individual Rating: {individualRating} Stars</p>
          </div>
        </div>

        <div className={styles.reviews}>
          <h3>Reviews:</h3>
          {product.reviews.map((review, index) => (
            <p key={index}>
              <b>{index + 1} -</b> {review}
            </p>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{ textAlign: "center", marginTop: "100px", fontSize: "30px" }}
      >
        No product Found!
      </div>
    );
  }
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://assignment6-server.vercel.app/products");
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://assignment6-server.vercel.app/products/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};

// import { Col, Row } from "antd";
// import {
//   UserOutlined,
//   CalendarOutlined,
//   CommentOutlined,
//   ProfileOutlined,
// } from "@ant-design/icons";
// import Image from "next/image";
// import RootLayout from "@/components/Layouts/RootLayout";

// const productDetailsPage = ({ product }) => (
//   <Row style={{ marginTop: "80px", alignItems: "center" }}>
//     <Col md={6} lg={12}>
//       <Image
//         alt="example"
//         src={product?.image}
//         width={500}
//         height={300}
//         responsive
//       />
//     </Col>
//     <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
//       <h1 style={{ fontSize: "30px" }}>{product?.title}</h1>
//       <span
//         style={{
//           color: "gray",
//           display: "block",
//           fontSize: "20px",
//         }}
//       >
//         <UserOutlined /> {product?.author}
//       </span>
//       <div
//         className="line"
//         style={{
//           height: "5px",
//           margin: "20px 0",
//           background: "#000",
//           width: "100%",
//         }}
//       ></div>

//       <p
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "100%",
//           color: "gray",
//           margin: "10px 0px",
//           fontSize: "20px",
//         }}
//       >
//         <span>
//           <CalendarOutlined /> {product?.release_date}
//         </span>
//         <span>
//           <CommentOutlined /> {product?.comment_count} Comments
//         </span>
//         <span>
//           <ProfileOutlined /> {product?.category}
//         </span>
//       </p>

//       <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
//         {product?.description}
//       </p>
//     </Col>
//   </Row>
// );
// export default productDetailsPage;

// productDetailsPage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

// export const getStaticPaths = async () => {
//   const res = await fetch("https://assignment6-server.vercel.app/products");
//   const products = await res.json();

//   const paths = products?.data?.map((product) => ({
//     params: { productId: product.id.toString() },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(`https://assignment6-server.vercel.app/products/${params.productId}`);
//   const data = await res.json();
//   return {
//     props: {
//       product: data,
//     },
//   };
// };
