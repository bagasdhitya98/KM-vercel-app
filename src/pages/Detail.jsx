import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const news = location?.state?.news;
  return (
    <section className="flex flex-col gap-y-5 justify-center items-center w-screen h-screen">
      <img src={news?.urlToImage} className="w-max h-60" />
      <h2 className="font-semibold">{news?.title}</h2>
      <p className="mx-40">{news?.content}</p>
    </section>
  );
};

export default Detail;
