
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

  // Photo gallery array - contains real photos from the organization's work
  const galleryImages = [
    {
      src: '/lovable-uploads/4ce616f2-dd54-4171-9845-db3bc1d32daf.png',
      alt: 'Children learning together at Berur Street Care',
      caption: 'Building friendships through education and care'
    },
    {
      src: '/lovable-uploads/a41c146c-4592-4ecd-867a-2863e9b519a3.png',
      alt: 'Children playing sports at the center',
      caption: 'Keeping children active through sports and recreation'
    },
    {
      src: '/lovable-uploads/6c2304db-a704-4ed2-afc7-b93780619657.png',
      alt: 'Group counseling session',
      caption: 'Providing emotional support through counseling'
    },
    {
      src: '/lovable-uploads/1ffbb634-fd37-4e11-b8ef-6ae625b05cdc.png',
      alt: 'Preparing meals at the center',
      caption: 'Preparing nutritious meals for the children'
    },
    {
      src: '/lovable-uploads/76bd2211-9866-4eca-85b6-590c6bc9c5f4.png',
      alt: 'Berur Children\'s Home celebration cake',
      caption: 'Celebrating milestones and achievements'
    },
    {
      src: '/lovable-uploads/f9302e31-990d-4a5d-b3db-535caea9597f.png',
      alt: 'Child cutting celebration cake',
      caption: 'Creating joyful moments and memories'
    },
    {
      src: '/lovable-uploads/81c12ec2-957b-448b-8673-086e43e06fbd.png',
      alt: 'Community gathering with donations',
      caption: 'Community support and generous donations'
    }
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

      {/* Photo Gallery Section - Showcases real photos from the organization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at the lives we're changing through education, care, and community support in Eldoret.
            </p>
          </div>
          
          {/* Responsive photo grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-700 text-center">{image.caption}</p>
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
