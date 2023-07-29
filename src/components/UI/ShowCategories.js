import React from "react";
import { Card, Rate, Row, Col, Button } from "antd";
import Link from "next/link";

const { Meta } = Card;

const ShowCategories = ({ categories }) => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {categories.map((categorie) => (
          <Col key={categorie._id} xs={24} sm={12} md={8} lg={8}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt={categorie.name}
                  src={categorie.image}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
              }
            >
              <Meta title={categorie.name} />
              <Link href={`/category/${categorie.slug}`} passHref>
                <Button style={{ marginTop: "20px" }} type="primary" block>
                  Explore Category
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ShowCategories;
