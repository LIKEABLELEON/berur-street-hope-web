
// Import necessary React icons and routing components
import { ArrowRight, Users, GraduationCap, Home as HomeIcon, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import custom components for the home page layout
import Header from '../components/Header';
import Footer from '../components/Footer';
import FacebookPosts from '../components/FacebookPosts';

const Home = () => {
  // Statistics data array - displays key metrics about the organization's impact
  // Each stat has an icon, label, and value to showcase achievements
  const stats = [
    { icon: Users, label: 'Children Helped', value: '500+' },
    { icon: HomeIcon, label: 'Families Housed', value: '150+' },
    { icon: GraduationCap, label: 'Students Educated', value: '300+' },
    { icon: Heart, label: 'Years of Service', value: '10+' },
  ];

  return (
    // Main page container with full height and white background
    <div className="min-h-screen bg-white">
      {/* Website navigation header */}
      <Header />
      
      {/* Hero Section - Main banner with call-to-action and featured image */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Hero content container with responsive padding */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero text content */}
            <div className="text-center lg:text-left">
              {/* Main headline with emphasis on education */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Education: A Lasting Way
                <span className="block text-orange-400">Out of Poverty</span>
              </h1>
              
              {/* Hero description explaining the mission */}
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
                We believe in school and education as a lasting way out of poverty. 
                We need your help to give street children from Eldoret, Kenya the opportunity to go to school!
              </p>
              
              {/* Call-to-action buttons - primary and secondary actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Primary CTA - Donation button with arrow icon */}
                <Link
                  to="/donate"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Help Send Kids to School <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                {/* Secondary CTA - Learn more button */}
                <Link
                  to="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Featured hero image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/lovable-uploads/4ce616f2-dd54-4171-9845-db3bc1d32daf.png"
                alt="Children learning together at Berur Street Care"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Showcases organization impact with numbers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Eldoret, Kenya</h2>
            <p className="text-lg text-gray-600">
              Through education and support, we're transforming lives in our community.
            </p>
          </div>
          
          {/* Responsive grid layout for statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Map through stats array to display each statistic */}
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {/* Icon circle with brand color background */}
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                {/* Large number display */}
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                {/* Stat label description */}
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website footer with additional links and information */}
      <Footer />
    </div>
  );
};

export default Home;
