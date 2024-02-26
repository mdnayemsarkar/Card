import PropTypes from "prop-types";
import { FaAccessibleIcon } from "react-icons/fa6";

const CardProps = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white  shadow-md flex items-center justify-center flex-col overflow-hiddenw-96   shadow-blue-50 rounded-3xl p-12">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-96 h-48 object-cover object-center"
      />

      {/* Content */}
      <div className=" mt-4 ">
        {/* Title */}
        <h3 className="text-xl   font-semibold text-gray-800 mb-2">{title}</h3>
        <FaAccessibleIcon className="text-5xl" />
        {/* Description */}
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

CardProps.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CardProps;
