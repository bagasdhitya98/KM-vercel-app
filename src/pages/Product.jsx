import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

import Button from "../components/Button";
import axios from "axios";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getAllProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchProduct = () => {
    const dupeProduct = [...product];
    const filteredProduct = dupeProduct.filter((item) =>
      item?.product_name?.toLowerCase().includes(search.toLowerCase())
    );
    setProduct(filteredProduct);
  };

  const handleAddToCart = (item) => {
    const newItem = {
      id: item?.id,
      title: item?.title,
      image: item?.image,
      description: item?.description,
      price: item?.price,
    };
    dispatch(addItem(newItem));
    navigate("/ecommerce/checkout");
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  useEffect(() => {
    if (search === "") {
      getAllProduct();
    }
  }, [search]);

  return (
    <section className="flex flex-col justify-start items-center w-screen h-screen">
      <div className="mt-10 flex">
        <input
          type="text"
          placeholder="Search product here ..."
          className="w-96 p-3 rounded-md border border-orange-500 bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="w-20 ml-5">
          <Button id={"search"} label={"Search"} onClick={searchProduct} />
        </div>
      </div>
      <div className="mx-20 my-20">
        <div className="w-full h-60 grid grid-cols-3 gap-y-5 gap-x-5">
          {product &&
            product?.map((item) => {
              return (
                <div className="w-96 h-full flex flex-col gap-y-5 rounded-md shadow-md p-4">
                  <img src={item?.image} className="h-40 w-max mx-auto" />
                  <p className="font-semibold">{item?.title}</p>
                  <p>{item?.description}</p>
                  <p className="font-semibold">Price : {item?.price}</p>
                  <div className="h-10">
                    <Button
                      id="add-to-cart"
                      onClick={() => handleAddToCart(item)}
                      label={"Add To Cart"}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Product;
