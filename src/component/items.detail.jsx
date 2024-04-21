import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const Card = ({ img, img3, img2, name, brand, price, description }) => {
  return (
    <div className="  container m-4  d-flex ">
      {/* <img src={img} alt="" /> */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide container float-start w-25"
      >
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active bg-secondary"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            className=" bg-secondary"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            className=" bg-secondary"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-secondary"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-secondary"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="py-4 w-50">
        <h1>{name}</h1>
        <p>
          <h6>brand:</h6>
          {brand}
        </p>
        <p>
          <b>Description:</b>
          {description}
        </p>
        <br />
        <h6 className="text-success d-flex justify-content-between">
          MRP:{price}
          <button className="float-end bg-danger text-white p-2 ">
            --Buy Now
          </button>
          <Link className="float-end bg-success p-2 text-white link-underline link-underline-opacity-0">
            Cart
          </Link>
        </h6>
      </div>
    </div>
  );
};
const Row = ({ arr = [] }) => {
  console.log("arr1", arr);
  return arr.map((items, index) => {
    // console.log("id",index)

    return (
      <Card
        id={index}
        img={items.images ? items.images[0] : items.photos[0]}
        img2={items.images ? items.images[1] : items.photos[1]}
        img3={items.images ? items.images[2] : items.photos[2]}
        name={items.name || items.title}
        description={items.description}
        brand={items.brand}
        price={items.price}
      />
    );
  });
};

const Items = () => {
  let url1 = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
  let url = "https://api.freeapi.app/api/v1/public/randomproducts";
  let { id } = useParams();

  const [data, setdata] = useState([]);
  const [alldata, setALLdata] = useState([]);
  const fetchdata = async () => {
    let response = await axios.get(url);
    setdata(response.data.data.data);
  };
  const fetchAlldata = async () => {
    let response = await axios.get(url1);
    setALLdata(response.data);
  };
  useEffect(() => {
    fetchAlldata();
    fetchdata();
  }, []);
  let combinedData = [...alldata, ...data];
  let filterdata = combinedData.filter((item, index) => {
    console.log(index, id);
    return index == id;
  });
  console.log("cd", combinedData);

  // console.log("ft", filterdata);
  return (
    <>
      <div>
        <Row arr={filterdata} />
      </div>
    </>
  );
};
export default Items;
