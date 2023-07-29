import React from "react";
import { Card, Rate, Row, Col, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addComponent } from "@/redux/features/componentsSlice";

const { Meta } = Card;

const ShowProducts = ({ products, showAddToBuild = false }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddToBuild = (product) => {
    dispatch(
      addComponent({
        category: product.category,
        component: {
          name: product.name,
          image: product.image,
          price: product.price,
        },
      })
    );
    router.push("/pc-builder");
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={8}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt={product.name}
                  src={product.image}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
              }
            >
              <Meta
                title={product.name}
                description={`Category: ${product.category}`}
              />
              <p style={{ margin: "8px 0" }}>Price: ${product.price}</p>
              <p style={{ margin: "8px 0" }}>Status: {product.status}</p>
              <Rate allowHalf defaultValue={product.rating} disabled />
              <Link href={`/product/${product.id}`} passHref>
                <Button style={{ marginTop: "10px" }} type="primary" block>
                  Show Details
                </Button>
              </Link>
              {showAddToBuild && (
                <Button
                  onClick={() => handleAddToBuild(product)}
                  style={{ marginTop: "10px" }}
                  type="primary"
                  block
                >
                  Add To Build
                </Button>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ShowProducts;
