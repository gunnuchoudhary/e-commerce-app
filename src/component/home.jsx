import { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import { Link, NavLink, json } from "react-router-dom";
// import Cart from "./cart";

const Card = ({
  Key,
  id,
  img,
  img2,
  img3,
  description,
  name,
  brand,
  price,
  addToCart,
}) => { 
  return (
    <div className="card">
      <Link to={`/Items/${id}`}>
        <img src={img} alt="" />
        <br />
        <h1>{name}</h1>
        <p>{brand}</p>
      </Link>

      <h6 className="text-success">
        MRP:{price}
        <button
          className="float-end bg-success text-white"
          onClick={() => {
            addToCart({ Key,id, img, img3, img2, name, brand, price, description });
          }}
        >
          cart
        </button>
      </h6>
    </div>
  );
};

const Row = ({ arr = [], addToCart }) => {
  return arr.map((items, index) => {
    return (
      <Card
        Key={index}
        id={index}
        img={items.images ? items.images[0] : items.photos[0]}
        img2={items.images ? items.images[1] : items.photos[1]}
        img3={items.images ? items.images[2] : items.photos[2]}
        name={items.name || items.title}
        brand={items.brand}
        description={items.description}
        price={items.price}
        addToCart={addToCart}
      />
    );
  });
};

const Home = ({ cart, setcart }) => {
  let url1 = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
  let url = "https://api.freeapi.app/api/v1/public/randomproducts";

  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  // console.log("Home");
  let cartData;
  const Cart = ({ Key,id, img, img3, img2, name, brand, price, description }) => {
    const obj = { Key,id, img, img3, img2, name, brand, price, description };
    cartData = [...cart, obj];
    localStorage.setItem("cart", JSON.stringify(cartData));
    setcart(cartData);
    // console.log("CART--- ", cartData);
  };
  // console.log("CART ", cart);

  const handleFilter = (arr, filterType) => {
    let filtered;
    switch (filterType) {
      case "men":
        filtered = arr.filter((item, index) => index < 3);
        break;
      case "women":
        filtered = arr.filter((item, index) => index === 3 || index === 4);
        break;
      case "watch":
        filtered = arr.filter(
          (item, index) => index === 5 || index === 6 || index === 7
        );
        break;
      case "electronic":
        filtered = arr.filter((item, index) => index > 7);
        break;
      case "Apple":
        filtered = arr.filter((item, index) => item.brand === "Apple");
        break;
      case "Samsung":
        filtered = arr.filter((item, index) => item.brand === "Samsung");
        break;
      case "mobile":
        filtered = arr.filter((item, index) => index < 5);
        break;
      case "laptop":
        filtered = arr.filter((item, index) => index >= 5);
        break;
      case "eurbud":
        filtered = arr.filter((item, index) => index > 7);
        break;
      default:
        filtered = arr; // No filtering
    }
    setFilteredData(filtered);
  };

  const fetchdata = async () => {
    let response = await axios.get(url);
    // console.log(response.data.data.data);
    setdata(response.data.data.data);
  };
  const fetchdata2 = async () => {
    let response = await axios.get(url1);
    // console.log(response.data);
    setdata2(response.data);
  };

  useEffect(() => {
    fetchdata2();
    fetchdata();
  }, []);

  // console.log("d", data);
  let combinedData = [...data2, ...data];

  // console.log("com", combinedData);

  return (
    <div>
      <div className="navlink">
        <NavLink onClick={combinedData}>ALL PRODUCTS</NavLink>

        <NavLink onClick={() => handleFilter(data2, "men")}>MEN</NavLink>
        <NavLink onClick={() => handleFilter(data2, "women")}>WOMEN</NavLink>

        <span className="px-2">
          <button
            className=" border-0 bg-white fw-medium dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => handleFilter(combinedData, "electronic")}
          >
            ELECTRONICS
          </button>
          <ul className="dropdown-menu ">
            <li className="bg-white">
              <NavLink
                className="dropdown-item bg-white text-dark "
                onClick={() => handleFilter(data, "laptop")}
              >
                LAPTOPS
              </NavLink>
            </li>
            <li>
              <NavLink
                className="dropdown-item bg-white text-dark"
                onClick={() => handleFilter(data, "mobile")}
              >
                MOBLIES
              </NavLink>
            </li>
            <li>
              <NavLink
                className="dropdown-item bg-white text-dark"
                onClick={() => handleFilter(data2, "watch")}
              >
                SMART WATCHS
              </NavLink>
            </li>
            <li>
              <NavLink
                className="dropdown-item bg-white text-dark"
                onClick={() => handleFilter(data2, "eurbud")}
              >
                EURBUDS
              </NavLink>
            </li>
            <li>
              <NavLink
                className="dropdown-item bg-white text-dark"
                onClick={() => {
                  handleFilter(combinedData, "Apple");
                }}
              >
                Apple
              </NavLink>
            </li>
            <li>
              <NavLink
                className="dropdown-item bg-white text-dark"
                onClick={() => {
                  handleFilter(combinedData, "Samsung");
                }}
              >
                samsung
              </NavLink>
            </li>
          </ul>
        </span>
      </div>

      {/* <h1>PRODUCTS</h1> */}

      <div className="row">
        <Row
          arr={filteredData.length > 0 ? filteredData : combinedData}
          addToCart={Cart}
        />
      </div>
    </div>
  );
};
export default Home;
