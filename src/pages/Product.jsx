import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getAllProduct = () => {
    axios
      .get("https://651fc507906e276284c37a02.mockapi.io/product")
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
                  <p className="font-semibold">{item?.product_name}</p>
                  <p>{item?.product_description}</p>
                  <p className="font-semibold">Price : {item?.price}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Product;
