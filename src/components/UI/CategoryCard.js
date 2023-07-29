import { useState } from "react";
import { Card, Button, Divider } from "antd";
import { useRouter } from "next/router";

const CategoryCard = ({
  category,
  selectedComponents,
  setSelectedComponents,
}) => {
  const router = useRouter();

  const [components, setComponents] = useState([
    // Replace this with the actual data fetching logic based on the category
    {
      id: 1,
      name: "Component 1",
      category,
      price: 100,
      status: "In Stock",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Component 2",
      category,
      price: 150,
      status: "Out of Stock",
      rating: 3.8,
    },
    {
      id: 3,
      name: "Component 3",
      category,
      price: 200,
      status: "In Stock",
      rating: 4.0,
    },
  ]);

  const handleAddToBuilder = (component) => {
    setSelectedComponents((prevSelected) => [...prevSelected, component]);
  };

  const handleSelectCategory = () => {
    router.push(`/category/${category.toLowerCase()}`);
  };

  return (
    <Card
      title={category}
      style={{
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        height: "100%",
      }}
    >
      {components.map((component) => (
        <div key={component.id} style={{ marginBottom: "16px" }}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            {component.name}
          </p>
          <p>Category: {component.category}</p>
          <p>Price: ${component.price}</p>
          <p>Status: {component.status}</p>
          <p>Rating: {component.rating}</p>
          <Button
            onClick={() => handleAddToBuilder(component)}
            type="primary"
            block
          >
            Add To Builder
          </Button>
        </div>
      ))}
      <Divider />
      <Button type="primary" block onClick={handleSelectCategory}>
        Choose/Select
      </Button>
    </Card>
  );
};

export default CategoryCard;
