import { motion } from "framer-motion";

const Card = ({ id, title, image, author, date, onClick }) => {
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
    <motion.div
      id={id}
      className="w-full h-full rounded-md shadow-md cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
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
      </div>
    </motion.div>
  );
};

export default Card;
