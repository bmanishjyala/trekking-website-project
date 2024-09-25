import React from 'react'
import { ChevronRight, ChevronLeft, Star, Calendar, MapPin, Users, Clock, Compass } from 'lucide-react'

const TrekcaveHomepage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold">
          <span className="text-amber-500">Trek</span>
          <span className="text-gray-900">cave</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-amber-500">Bookings</a>
          <a href="#" className="hover:text-amber-500">Trekking Map</a>
          <a href="#" className="hover:text-amber-500">Pakages</a>
          <a href="#" className="hover:text-amber-500">Instructor</a>
          <a href="#" className="hover:text-amber-500">Contact</a>
        </nav>
        <button className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition duration-300">
          Want To Go
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4">
            Trekking &<br />Camping
          </h1>
          <p className="text-xl mb-8">A perfect guid to your snow peak adventures</p>
          <button className="bg-gradient-to-r from-baseTrekColor to-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-amber-500 hover:to-amber-600 transition duration-300 flex items-center">
            BOOK NOW
            <ChevronRight className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1484264883846-eb04404af310?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mountain Trekking"
            className="rounded-3xl w-full h-auto"
          />
        </div>
      </section>

      {/* Featured Treks */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Treks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Everest Base Camp', 'Annapurna Circuit', 'Inca Trail'].map((trek, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://www.anelto.com/wp-content/uploads/2021/08/placeholder-image.png"
                  alt={trek}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{trek}</h3>
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="text-amber-500 mr-2" />
                    <span className="text-gray-600">Nepal</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-amber-500 mr-2" />
                    <span className="text-gray-600">14 days</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Users size={16} className="text-amber-500 mr-2" />
                    <span className="text-gray-600">Max 12 people</span>
                  </div>
                  <button className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trek Difficulty Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Trek Difficulty Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Easy', 'Moderate', 'Challenging', 'Extreme'].map((level, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass size={32} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{level}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Suitable for beginners with basic fitness."}
                  {index === 1 && "Requires some hiking experience and good fitness."}
                  {index === 2 && "For experienced hikers with excellent fitness."}
                  {index === 3 && "Demands top physical condition and technical skills."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trek Events */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Trek Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Summer Solstice Trek', 'Monsoon Adventure', 'Autumn Colors Hike'].map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://www.anelto.com/wp-content/uploads/2021/08/placeholder-image.png"
                  alt={event}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event}</h3>
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-amber-500 mr-2" />
                    <span className="text-gray-600">June 21, 2024</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock size={16} className="text-amber-500 mr-2" />
                    <span className="text-gray-600">5 days</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin size={16} className="text-amber-500 mr-2" />
                    <span className="text-gray-600">Himalayas, India</span>
                  </div>
                  <button className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trekking Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Essential Trekking Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { tip: "Pack Light", icon: <Compass size={32} className="text-amber-500" /> },
              { tip: "Stay Hydrated", icon: <Users size={32} className="text-amber-500" /> },
              { tip: "Wear Proper Footwear", icon: <MapPin size={32} className="text-amber-500" /> },
              { tip: "Acclimatize Properly", icon: <Clock size={32} className="text-amber-500" /> },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.tip}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Carry only essentials to reduce weight and increase comfort."}
                  {index === 1 && "Drink plenty of water to prevent altitude sickness and fatigue."}
                  {index === 2 && "Invest in quality, broken-in hiking boots for better support."}
                  {index === 3 && "Take time to adjust to high altitudes before pushing further."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trek Options Carousel */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Popular Treks</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
              <ChevronLeft size={24} />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Manali Trek', 'Sikkim, India', 'Manali Trek'].map((trek, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://www.anelto.com/wp-content/uploads/2021/08/placeholder-image.png"
                alt={trek}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{trek}</h3>
                <p className="text-gray-600 mb-2">7 Days/6 Night</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">(70 Review)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TrekcaveHomepage