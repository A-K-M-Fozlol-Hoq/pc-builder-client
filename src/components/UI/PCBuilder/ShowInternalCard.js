import React from "react";
import { Button, Card } from "antd";

const ShowInternalCard = ({ name, image, price, onRemove }) => {
  if (name) {
    return (
      <Card
        style={{ width: 300, margin: "10px auto" }}
        bodyStyle={{ padding: "12px 16px" }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
          <img
            alt={name}
            src={image}
            style={{
              height: 40,
              width: 40,
              borderRadius: "50%",
              marginRight: 12,
            }}
          />
          <div style={{ marginLeft: 12 }}>
            <div style={{ fontWeight: "bold", fontSize: 16 }}>{name}</div>
            <div>{`Price: $${price}`}</div>
          </div>
        </div>
        <Button block onClick={onRemove}>
          Remove
        </Button>
      </Card>
    );
  } else {
    return <i>No Product Choosen</i>;
  }
};

export default ShowInternalCard;
