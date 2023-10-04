import { motion } from "framer-motion";
import Button from "./Button";

const Card = ({ id, title, image, author, date, onClick, onRead }) => {
  const dateTimeList = date;
  const dateTime = new Date(dateTimeList);

  const weekList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = weekList[dateTime.getUTCDay()];
  const monthOfYear = monthList[dateTime.getUTCMonth()];
  const day = dateTime.getUTCDate();
  const year = dateTime.getUTCFullYear();

  return (
    <div
      id={id}
      className="w-full h-full rounded-md shadow-md cursor-pointer"
      onClick={onClick}
    >
      <img
        src={
          image !== null && !image.includes("webp")
            ? image
            : "https://placehold.co/600x500"
        }
        className="w-full h-60"
      />
      <div className="p-4 flex flex-col gap-y-5">
        <h2 className="text-black font-semibold">{title}</h2>
        <p className="text-black">
          Author : {author !== null ? author : "author not provided"}
        </p>
        <p className="text-black">{`${dayOfWeek} ,${day} ${monthOfYear} ${year}`}</p>
        <div className="h-10 w-40">
          <Button label={"Add Read List"} onClick={onRead} />
        </div>
      </div>
    </div>
  );
};

export default Card;
