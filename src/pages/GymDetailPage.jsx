import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiMapPin,
  FiStar,
  FiClock,
  FiPhone,
  FiMail,
  FiGlobe,
  FiInstagram,
  FiArrowLeft,
} from "react-icons/fi";
import { motion } from "framer-motion";

const GymDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [gym, setGym] = useState(null);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll use mock data
    const mockGym = {
      id: 1,
      name: "FitZone Downtown",
      description:
        "A state-of-the-art fitness facility in the heart of downtown, offering premium equipment and expert training services.",
      images: [
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
        "https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg",
        "https://images.pexels.com/photos/3836861/pexels-photo-3836861.jpeg",
        "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg",
      ],
      rating: 4.8,
      reviewCount: 128,
      location: "123 Fitness Street, Downtown, New York, NY 10001",
      hours: {
        monday: "5:00 AM - 11:00 PM",
        tuesday: "5:00 AM - 11:00 PM",
        wednesday: "5:00 AM - 11:00 PM",
        thursday: "5:00 AM - 11:00 PM",
        friday: "5:00 AM - 10:00 PM",
        saturday: "6:00 AM - 9:00 PM",
        sunday: "7:00 AM - 8:00 PM",
      },
      amenities: [
        "Olympic Pool",
        "Sauna & Steam Room",
        "CrossFit Area",
        "Personal Training",
        "Group Classes",
        "Cardio Theater",
        "Free Parking",
        "Towel Service",
        "Locker Rooms",
        "Juice Bar",
      ],
      contact: {
        phone: "+1 (555) 123-4567",
        email: "info@fitzonedowntown.com",
        website: "www.fitzonedowntown.com",
        instagram: "@fitzonedowntown",
      },
      classes: [
        {
          name: "Morning Yoga",
          time: "6:00 AM",
          instructor: "Sarah Johnson",
          duration: "60 min",
        },
        {
          name: "HIIT Training",
          time: "7:30 AM",
          instructor: "Mike Thompson",
          duration: "45 min",
        },
        {
          name: "Spin Class",
          time: "5:30 PM",
          instructor: "Emily Davis",
          duration: "45 min",
        },
      ],
    };

    // In a real app, you would fetch the gym data based on the id
    // For now, we'll just use the mock data if the ids match
    if (parseInt(id) === mockGym.id) {
      setGym(mockGym);
    } else {
      // If gym not found, navigate back to gyms page
      navigate("/gyms");
    }
  }, [id, navigate]);

  if (!gym) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        {/* Back button */}
        <motion.button
          className="flex items-center text-primary-600 dark:text-primary-500 mb-6"
          onClick={() => navigate("/gyms")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowLeft className="mr-2" />
          Back to Gyms
        </motion.button>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            className="relative h-96 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={gym.images[selectedImage]}
              alt={`${gym.name} view ${selectedImage + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {gym.images.map((image, index) => (
              <motion.button
                key={index}
                className={`relative h-44 rounded-lg overflow-hidden ${
                  selectedImage === index ? "ring-2 ring-primary-500" : ""
                }`}
                onClick={() => setSelectedImage(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={image}
                  alt={`${gym.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Gym Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card mb-8">
                <h1 className="text-3xl font-bold mb-4">{gym.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <FiStar className="text-warning-500 mr-1" />
                    <span className="font-medium">{gym.rating}</span>
                    <span className="text-light-textSecondary dark:text-dark-textSecondary ml-1">
                      ({gym.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center text-light-textSecondary dark:text-dark-textSecondary">
                    <FiMapPin className="mr-1" />
                    <span>{gym.location}</span>
                  </div>
                </div>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">
                  {gym.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="card mb-8">
                <h2 className="text-xl font-bold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gym.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-light-background dark:bg-dark-background rounded-lg"
                    >
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Class Schedule */}
              <div className="card">
                <h2 className="text-xl font-bold mb-4">Today's Classes</h2>
                <div className="space-y-4">
                  {gym.classes.map((classItem, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-light-background dark:bg-dark-background rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{classItem.name}</h3>
                        <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                          {classItem.instructor} • {classItem.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{classItem.time}</p>
                        <button className="text-sm text-primary-600 dark:text-primary-500">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Hours */}
              <div className="card mb-6">
                <h2 className="text-xl font-bold mb-4">Hours of Operation</h2>
                <div className="space-y-2">
                  {Object.entries(gym.hours).map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex justify-between items-center"
                    >
                      <span className="capitalize">{day}</span>
                      <span className="text-light-textSecondary dark:text-dark-textSecondary">
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="card">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FiPhone className="mr-3 text-primary-600 dark:text-primary-500" />
                    <span>{gym.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FiMail className="mr-3 text-primary-600 dark:text-primary-500" />
                    <a
                      href={`mailto:${gym.contact.email}`}
                      className="text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      {gym.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FiGlobe className="mr-3 text-primary-600 dark:text-primary-500" />
                    <a
                      href={`https://${gym.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      {gym.contact.website}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FiInstagram className="mr-3 text-primary-600 dark:text-primary-500" />
                    <a
                      href={`https://instagram.com/${gym.contact.instagram.substring(
                        1
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      {gym.contact.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDetailPage;
