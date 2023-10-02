import { useEffect, useState } from "react";
import axios from "axios";

import Button from "../components/Button";
import Card from "../components/Card";

const News = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getNews = (category) => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${
          !category ? "business" : category
        }&apiKey=027a0c86b59d4edaa9c304428b94a784`
      )
      .then((response) => {
        setNews(response?.data?.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = () => {
    const newsCopy = [...news];

    const filteredNews = newsCopy.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setNews(filteredNews);
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      getNews();
    }
  }, [searchQuery]);

  return (
    <section className="flex flex-col justify-start items-center w-screen h-screen">
      <div className="mt-10 flex">
        <input
          type="text"
          placeholder="Search news here ..."
          className="w-96 p-3 rounded-md border border-orange-500 bg-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="w-20 ml-5">
          <Button id={"search"} label={"Search"} onClick={handleSearch} />
        </div>
      </div>
      <div className="w-max flex gap-x-5 mt-20">
        <Button
          id={"categories"}
          label={"Politics"}
          onClick={() => getNews("politics")}
        />
        <Button
          id={"categories"}
          label={"Business"}
          onClick={() => getNews("business")}
        />
        <Button
          id={"categories"}
          label={"Health"}
          onClick={() => getNews("health")}
        />
        <Button
          id={"categories"}
          label={"Sport"}
          onClick={() => getNews("sport")}
        />
      </div>
      <div className="mx-20 my-20">
        <div className="w-full h-60 grid grid-cols-4 gap-10">
          {news &&
            news?.map((item, index) => {
              return (
                <Card
                  key={index}
                  id={item?.source?.id}
                  title={item?.title}
                  author={item?.author}
                  date={item?.publishedAt}
                  image={item?.urlToImage}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default News;
