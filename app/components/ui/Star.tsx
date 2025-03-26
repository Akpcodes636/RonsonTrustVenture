import { FaStar } from "react-icons/fa";

export default function StarRating({ count = 5 }) {
  return (
    <div className="flex space-x-1 text-[#FBAC35]">
      {[...Array(count)].map((_, index) => (
        <FaStar key={index} size={14} />
      ))}
    </div>
  );
}
