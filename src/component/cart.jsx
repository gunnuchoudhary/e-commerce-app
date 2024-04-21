import React from "react";
// import { Link } from "react-router-dom";

const Cart = ({ cart, setcart }) => {
  let removeItem;
  const handleRemoveCart = (id, cart) => {
    removeItem = cart.filter((item) => {
      return id != item.id;
    });
    console.log("rrrr", removeItem);
    localStorage.setItem("cart", JSON.stringify(removeItem));
    setcart([...removeItem])
  };
  console.log("rrrr", removeItem);
  return (
    <div className="container">
      {cart.map((items, index, cart) => {
        console.log("cc", cart);
        return (
          <div className="  container m-4  d-flex ">
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
                  <img src={items.img} className="d-block w-100 " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={items.img3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={items.img2} className="d-block w-100" alt="..." />
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
              <h1>{items.name}</h1>
              <p>
                <b>brand:</b>
                {items.brand}
              </p>
              <p>
                <b>Description:</b>

                {items.description}
              </p>
              <br />
              <h6 className="text-success d-flex justify-content-between">
                MRP:{items.price}
                <button className="float-end bg-danger text-white p-2 ">
                  --Buy Now
                </button>
                <button
                  className="float-end bg-success p-2 text-white link-underline link-underline-opacity-0"
                  onClick={() => {
                    handleRemoveCart(items.id, cart);
                  }}
                >
                  Remove
                </button>
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
