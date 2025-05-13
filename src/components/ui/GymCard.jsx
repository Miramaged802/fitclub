import { FiMapPin, FiStar, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GymCard = ({ gym }) => {
  const {
    id,
    name,
    image,
    location,
    rating,
    reviewCount = 0,
    hours,
    amenities = [],
    distance,
  } = gym;

  return (
    <motion.div
      className="card overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {distance && (
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <FiMapPin size={12} className="mr-1" />
            <span>{distance} miles</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{name}</h3>

        <div className="flex items-center text-sm text-light-textSecondary dark:text-dark-textSecondary mb-3">
          <FiMapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>

        {rating && (
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <FiStar className="text-warning-500 mr-1" size={16} />
              <span className="font-medium">{rating}</span>
            </div>
            {reviewCount > 0 && (
              <span className="text-sm text-light-textSecondary dark:text-dark-textSecondary ml-2">
                ({reviewCount} reviews)
              </span>
            )}
          </div>
        )}

        {hours && (
          <div className="flex items-center text-sm text-light-textSecondary dark:text-dark-textSecondary mb-3">
            <FiClock size={14} className="mr-1" />
            <span>{hours}</span>
          </div>
        )}

        {amenities.length > 0 && (
          <div className="mt-auto pt-3">
            <div className="flex flex-wrap gap-2">
              {amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="text-xs bg-light-background dark:bg-dark-background px-2 py-1 rounded-full"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-5 pt-0">
        <Link to={`/gym/${id}`} className="w-full btn btn-outline">
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default GymCard;
