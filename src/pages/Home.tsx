
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

  // Programs data array - showcases the main services offered by the organization
  // Each program has a title, description, and representative image
  const programs = [
    {
      title: 'Emergency Food & Shelter',
      description: 'Providing immediate relief with nutritious meals and safe accommodation for street children and families.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Education & Skills Training',
      description: 'Offering quality education and vocational training to break the cycle of poverty and build brighter futures.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Family Rehabilitation',
      description: 'Comprehensive support programs that help reunite families and provide long-term stability.',
      image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    // Main page container with full height and white background
    <div className="min-h-screen bg-white">
      {/* Website navigation header */}
      <Header />
      
      {/* Hero Section - Main banner with call-to-action */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Hero content container with responsive padding */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Main headline with emphasis on education */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Education: A Lasting Way
              <span className="block text-orange-400">Out of Poverty</span>
            </h1>
            
            {/* Hero description explaining the mission */}
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              We believe in school and education as a lasting way out of poverty. 
              We need your help to give street children from Eldoret, Kenya the opportunity to go to school!
            </p>
            
            {/* Call-to-action buttons - primary and secondary actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Programs Section - Details about services offered */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with title and description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support to address the immediate and long-term needs of street children and their families in Eldoret.
            </p>
          </div>
          
          {/* Responsive grid layout for program cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map through programs array to create program cards */}
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Program image */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                {/* Program content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Posts Section - Displays recent social media updates */}
      <FacebookPosts />

      {/* Call to Action Section - Final conversion section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Compelling headline focused on education impact */}
          <h2 className="text-4xl font-bold mb-6">Give a Child in Eldoret the Gift of Education</h2>
          
          {/* Emotional appeal with clear value proposition */}
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Education breaks the cycle of poverty. Your support can send a street child to school 
            and transform their future forever.
          </p>
          
          {/* Final call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA - Direct donation link */}
            <Link
              to="/donate"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Fund Education Today
            </Link>
            
            {/* Secondary CTA - Partnership opportunity */}
            <Link
              to="/partner"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Website footer with additional links and information */}
      <Footer />
    </div>
  );
};

export default Home;
