import { Button, Card } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeComponent } from "@/redux/features/componentsSlice";
import ShowInternalCard from "./ShowInternalCard";

const categories = [
  { name: "CPU / Processor", url: "/selectProduct/cpu_processor" },
  { name: "Motherboard", url: "/selectProduct/motherboard" },
  { name: "RAM", url: "/selectProduct/ram" },
  { name: "Power Supply Unit", url: "/selectProduct/power_supply_unit" },
  { name: "Storage Device", url: "/selectProduct/storage_device" },
  { name: "Monitor", url: "/selectProduct/monitor" },
];

// const ShowInternalCart = ({ name, image, price, onRemove }) => {
//   if (name) {
//     return (
//       <Card
//         style={{ width: 300, margin: "10px auto" }}
//         bodyStyle={{ padding: "12px 16px" }}
//       >
//         <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
//           <img
//             alt={name}
//             src={image}
//             style={{
//               height: 40,
//               width: 40,
//               borderRadius: "50%",
//               marginRight: 12,
//             }}
//           />
//           <div style={{ marginLeft: 12 }}>
//             <div style={{ fontWeight: "bold", fontSize: 16 }}>{name}</div>
//             <div>{`Price: $${price}`}</div>
//           </div>
//         </div>
//         <Button block onClick={onRemove}>
//           Remove
//         </Button>
//       </Card>
//     );
//   } else {
//     return <i>No Product Choosen</i>;
//   }
// };

const PCBuilder = () => {
  // const [components, setComponents] = useState({});
  const components = useSelector((state) => state.components);
  const isBuildComplete = Object.keys(components).length === categories.length;

  // const [isBuildComplete, setBuildComplete] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRemoveComponent = (category) => {
    console.log(category);
    dispatch(removeComponent(category));
    // setComponents((prev) => {
    //   const updatedComponents = { ...prev };
    //   delete updatedComponents[category];
    //   const remainingCategories = Object.keys(updatedComponents).length;
    //   if (remainingCategories < categories.length) {
    //     setBuildComplete(false);
    //   }
    //   return updatedComponents;
    // });
  };

  const redirectUrl = (url) => {
    router.push(url);
  };

  // useEffect(() => {
  //   if (Object.keys(components).length === categories.length) {
  //     setBuildComplete(true);
  //   } else {
  //     setBuildComplete(false);
  //   }
  // }, [components]);

  const handleCompleteBuild = () => {
    if (isBuildComplete) {
      toast.success("Build has been completed!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>PC Builder</h1>
      {categories.map((category) => (
        <div
          key={category.name}
          style={{ width: 320, margin: "0 auto", marginTop: "20px" }}
        >
          <Card
            title={category.name}
            extra={
              <Button
                type="primary"
                disabled={components[category?.name]?.name}
                onClick={() => {
                  redirectUrl(category.url);
                }}
              >
                Add
              </Button>
            }
          >
            {components[category.name] ? (
              <ShowInternalCard
                name={components[category.name].name}
                image={components[category.name].image}
                price={components[category.name].price}
                onRemove={() => handleRemoveComponent(category.name)}
              />
            ) : (
              "No component selected"
            )}
          </Card>
        </div>
      ))}
      <div style={{ marginTop: 25, textAlign: "center", marginBottom: "50px" }}>
        <Button
          type="primary"
          onClick={handleCompleteBuild}
          disabled={!isBuildComplete}
        >
          Complete Build
        </Button>
      </div>
    </div>
  );
};

export default PCBuilder;
