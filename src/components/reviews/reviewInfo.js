import { FaStar } from "react-icons/fa";

function convertToStars(num) {
  return Array.from({ length: num }, (_, index) => <FaStar key={index} />);
}

const ReviewInfo = ({ title, rating, impression }) => {
  return (
    <div className="md:mx-auto md:w-1/2">
      {title && <h3 className="inline-block rounded-t-md bg-green px-4 font-bold text-white-100">{title}</h3>}
      <div className="flex flex-col gap-4 border-2 border-green p-4">
        {rating && (
          <p className="flex items-center gap-1">
            評価：
            <span className="flex gap-2 text-yellow-400">{convertToStars(rating)}</span>
          </p>
        )}
        {impression && <p>{impression}</p>}
      </div>
    </div>
  );
};

export default ReviewInfo;
