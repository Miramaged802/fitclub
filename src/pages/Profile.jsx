import { useState } from 'react';
import { 
  FiUser, FiCreditCard, FiClipboard, FiSettings, 
  FiMapPin, FiEdit, FiCamera, FiCheckCircle, FiBarChart 
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  // Mock user data
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    plan: 'Premium',
    nextBillingDate: 'October 15, 2023',
    memberSince: 'January 2023',
    address: '123 Fitness St, New York, NY 10001',
    phone: '(555) 123-4567',
    preferredGym: 'FitZone Downtown',
    fitnessGoals: ['Build Muscle', 'Improve Endurance'],
    recentWorkouts: [
      { date: '2023-09-20', name: 'Full Body Strength', duration: 65 },
      { date: '2023-09-18', name: 'Cardio Session', duration: 45 },
      { date: '2023-09-16', name: 'Upper Body Focus', duration: 50 },
      { date: '2023-09-14', name: 'Leg Day', duration: 60 },
    ],
    favoriteGyms: [
      {
        id: 1,
        name: 'FitZone Downtown',
        image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Downtown, New York',
      },
      {
        id: 2,
        name: 'Elite Fitness Club',
        image: 'https://images.pexels.com/photos/13106586/pexels-photo-13106586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        location: 'Upper East Side, New York',
      }
    ]
  };
  
  const tabs = [
    { id: 'account', label: 'Account', icon: <FiUser /> },
    { id: 'subscription', label: 'Subscription', icon: <FiCreditCard /> },
    { id: 'progress', label: 'Progress', icon: <FiBarChart /> },
    { id: 'workouts', label: 'Workouts', icon: <FiClipboard /> },
    { id: 'settings', label: 'Settings', icon: <FiSettings /> },
  ];
  
  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Header - Mobile Only */}
          <div className="lg:hidden card mb-6 p-6">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src={userData.avatar} 
                    alt={userData.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-1.5 rounded-full">
                  <FiCamera size={14} />
                </button>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">{userData.name}</h1>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">
                  {userData.plan} Member
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="card sticky top-24">
              {/* Profile Info - Desktop Only */}
              <div className="hidden lg:block mb-8">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                      <img 
                        src={userData.avatar} 
                        alt={userData.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-1.5 rounded-full">
                      <FiCamera size={14} />
                    </button>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h1 className="text-2xl font-bold">{userData.name}</h1>
                  <p className="text-light-textSecondary dark:text-dark-textSecondary">
                    {userData.plan} Member
                  </p>
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mt-1">
                    Member since {userData.memberSince}
                  </p>
                </div>
              </div>
              
              {/* Navigation Tabs */}
              <nav>
                <ul className="space-y-1">
                  {tabs.map(tab => (
                    <li key={tab.id}>
                      <button
                        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                            : 'hover:bg-light-background dark:hover:bg-dark-background'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <span className="mr-3">{tab.icon}</span>
                        <span>{tab.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card"
            >
              {activeTab === 'account' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Personal Information</h2>
                    <button className="btn btn-outline flex items-center">
                      <FiEdit className="mr-2" size={16} />
                      <span>Edit</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-1">Full Name</h3>
                      <p className="font-medium">{userData.name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-1">Email Address</h3>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-1">Phone Number</h3>
                      <p className="font-medium">{userData.phone}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-1">Address</h3>
                      <p className="font-medium">{userData.address}</p>
                    </div>
                  </div>
                  
                  <hr className="my-8 border-light-border dark:border-dark-border" />
                  
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Fitness Preferences</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-1">Preferred Gym</h3>
                        <p className="font-medium">{userData.preferredGym}</p>
                      </div>
                      <div>
                        <h3 className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-1">Fitness Goals</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {userData.fitnessGoals.map((goal, index) => (
                            <span 
                              key={index}
                              className="bg-light-background dark:bg-dark-background px-3 py-1 rounded-full text-sm"
                            >
                              {goal}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <hr className="my-8 border-light-border dark:border-dark-border" />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Favorite Gyms</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userData.favoriteGyms.map(gym => (
                        <div key={gym.id} className="flex bg-light-background dark:bg-dark-background rounded-lg overflow-hidden">
                          <div className="w-20 h-20 flex-shrink-0">
                            <img 
                              src={gym.image} 
                              alt={gym.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3">
                            <h3 className="font-medium">{gym.name}</h3>
                            <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary flex items-center">
                              <FiMapPin size={12} className="mr-1" />
                              {gym.location}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'subscription' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Subscription Details</h2>
                  
                  <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg mb-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <span className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-1 block">Current Plan</span>
                        <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-500">
                          {userData.plan}
                        </h3>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                        <span className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-1">
                          Next billing on {userData.nextBillingDate}
                        </span>
                        <div className="flex space-x-3">
                          <button className="btn btn-primary mt-2">
                            Upgrade Plan
                          </button>
                          <button className="btn btn-outline mt-2">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Plan Benefits</h3>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FiCheckCircle className="text-success-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Access to 500+ gyms nationwide</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheckCircle className="text-success-500 mt-1 mr-2 flex-shrink-0" />
                        <span>24/7 gym access at all locations</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheckCircle className="text-success-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Premium workout plans and tracking tools</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheckCircle className="text-success-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Advanced health tracking and metrics</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheckCircle className="text-success-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Monthly personal trainer consultation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                    
                    <div className="bg-light-background dark:bg-dark-background p-4 rounded-lg flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded">
                          <FiCreditCard size={20} />
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                            Expires 05/25
                          </p>
                        </div>
                      </div>
                      <button className="text-primary-600 dark:text-primary-500 font-medium">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'workouts' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Workout History</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="text-left bg-light-background dark:bg-dark-background">
                        <tr>
                          <th className="p-3 rounded-tl-lg">Date</th>
                          <th className="p-3">Workout</th>
                          <th className="p-3">Duration</th>
                          <th className="p-3 rounded-tr-lg">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-light-border dark:divide-dark-border">
                        {userData.recentWorkouts.map((workout, index) => (
                          <tr key={index} className="hover:bg-light-background dark:hover:bg-dark-background">
                            <td className="p-3">
                              {new Date(workout.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </td>
                            <td className="p-3 font-medium">{workout.name}</td>
                            <td className="p-3">{workout.duration} min</td>
                            <td className="p-3">
                              <button className="text-primary-600 dark:text-primary-500 font-medium">
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
                    
                    <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg text-center">
                      <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                        You don't have any upcoming workout sessions scheduled.
                      </p>
                      <button className="btn btn-primary">
                        Schedule a Workout
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'progress' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="card bg-primary-50 dark:bg-primary-900/20 p-6">
                      <p className="text-sm text-primary-600 dark:text-primary-400 mb-1">Workouts This Month</p>
                      <h3 className="text-3xl font-bold text-primary-700 dark:text-primary-500">12</h3>
                      <p className="text-sm text-primary-600/70 dark:text-primary-400/70 mt-1">+3 from last month</p>
                    </div>
                    
                    <div className="card bg-secondary-50 dark:bg-secondary-900/20 p-6">
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">Total Hours</p>
                      <h3 className="text-3xl font-bold text-secondary-700 dark:text-secondary-500">24.5</h3>
                      <p className="text-sm text-secondary-600/70 dark:text-secondary-400/70 mt-1">+5.5 from last month</p>
                    </div>
                    
                    <div className="card bg-accent-50 dark:bg-accent-900/20 p-6">
                      <p className="text-sm text-accent-600 dark:text-accent-400 mb-1">Gym Visits</p>
                      <h3 className="text-3xl font-bold text-accent-700 dark:text-accent-500">8</h3>
                      <p className="text-sm text-accent-600/70 dark:text-accent-400/70 mt-1">+2 from last month</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Goal Progress</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Build Muscle</span>
                          <span>60%</span>
                        </div>
                        <div className="w-full bg-light-background dark:bg-dark-background rounded-full h-2.5">
                          <div 
                            className="bg-primary-600 h-2.5 rounded-full" 
                            style={{ width: '60%' }} 
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Improve Endurance</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-light-background dark:bg-dark-background rounded-full h-2.5">
                          <div 
                            className="bg-accent-600 h-2.5 rounded-full" 
                            style={{ width: '75%' }} 
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex bg-light-background dark:bg-dark-background p-4 rounded-lg">
                        <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-full mr-4">
                          <FiCheckCircle size={24} />
                        </div>
                        <div>
                          <h4 className="font-medium">10 Workouts Completed</h4>
                          <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                            September 18, 2023
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex bg-light-background dark:bg-dark-background p-4 rounded-lg">
                        <div className="bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 p-3 rounded-full mr-4">
                          <FiCheckCircle size={24} />
                        </div>
                        <div>
                          <h4 className="font-medium">First Personal Training Session</h4>
                          <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                            September 12, 2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
                      <div className="space-y-3">
                        {[
                          { id: 'workout-reminders', label: 'Workout reminders' },
                          { id: 'subscription-updates', label: 'Subscription updates' },
                          { id: 'new-features', label: 'New features and improvements' },
                          { id: 'gym-updates', label: 'Updates from your favorite gyms' },
                          { id: 'promotional', label: 'Promotional emails and special offers' }
                        ].map(option => (
                          <div key={option.id} className="flex items-center justify-between p-3 bg-light-background dark:bg-dark-background rounded-lg">
                            <label htmlFor={option.id} className="cursor-pointer">{option.label}</label>
                            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer">
                              <input
                                type="checkbox"
                                id={option.id}
                                className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white border-2 rounded-full appearance-none cursor-pointer peer border-light-border dark:border-dark-border checked:translate-x-6 checked:border-primary-600 dark:checked:border-primary-500"
                                defaultChecked={['workout-reminders', 'subscription-updates', 'new-features'].includes(option.id)}
                              />
                              <span className="absolute inset-0 transition duration-200 ease-in-out rounded-full bg-light-border dark:bg-dark-border peer-checked:bg-primary-600 dark:peer-checked:bg-primary-500"></span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
                      <div className="space-y-3">
                        {[
                          { id: 'show-profile', label: 'Show my profile to other members' },
                          { id: 'share-workouts', label: 'Share my workouts with friends' },
                          { id: 'location-tracking', label: 'Enable location tracking for gym suggestions' }
                        ].map(option => (
                          <div key={option.id} className="flex items-center justify-between p-3 bg-light-background dark:bg-dark-background rounded-lg">
                            <label htmlFor={option.id} className="cursor-pointer">{option.label}</label>
                            <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer">
                              <input
                                type="checkbox"
                                id={option.id}
                                className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white border-2 rounded-full appearance-none cursor-pointer peer border-light-border dark:border-dark-border checked:translate-x-6 checked:border-primary-600 dark:checked:border-primary-500"
                                defaultChecked={['location-tracking'].includes(option.id)}
                              />
                              <span className="absolute inset-0 transition duration-200 ease-in-out rounded-full bg-light-border dark:bg-dark-border peer-checked:bg-primary-600 dark:peer-checked:bg-primary-500"></span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
                      <div className="space-y-3">
                        <button className="w-full btn btn-outline justify-start">
                          Change Password
                        </button>
                        <button className="w-full btn btn-outline justify-start text-error-600 dark:text-error-400 border-error-200 dark:border-error-800 hover:bg-error-50 dark:hover:bg-error-900/20">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;