import React from "react";
import { useNavigate } from "react-router-dom";

const Bookmark = () => {
  const navigate = useNavigate();
  const list = localStorage.getItem("list");
  const listParsed = JSON.parse(list);

  console.log(
    "list : ",
    listParsed.map((item) => item.title)
  );

  return (
    <section className="my-auto">
      <div className="flex justify-center items-center my-5 gap-x-5">
        <button
          onClick={() => navigate(-1)}
          className="bg-white border border-orange-500 text-orange-500 font-bold"
        >
          Back
        </button>
        <h2 className=" text-orange-500 font-bold">BOOKMARK LIST</h2>
      </div>
      <section className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-y-10 mt-40">
          {listParsed?.map((item) => {
            return (
              <div className="w-80 h-40 border shadow-md rounded-md">
                <img className="w-full h-20" src={item?.urlToImage} />
                <p>{item?.title}</p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Bookmark;
