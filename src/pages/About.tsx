
import { Heart, Target, Eye, Users, Award, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love & Compassion',
      description: 'We serve with genuine love, following Christ\'s example of caring for the least among us.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of community to heal, restore, and transform lives.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in all our programs and services to maximize impact.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We focus on long-term solutions that create lasting change in communities.'
    }
  ];

  const teamMembers = [
    {
      name: 'Pastor John Berur',
      role: 'Founder & Executive Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Pastor John founded Berur Street Care International with a vision to transform lives through God\'s love.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Program Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Sarah oversees our educational and rehabilitation programs with over 15 years of experience.'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Michael ensures our operations run smoothly and efficiently to maximize our impact.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Mission</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Learn about our journey, values, and the dedicated team working to transform lives 
              through Christ-centered care and rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide comprehensive care and rehabilitation for street children and families 
                through Christ-centered programs that offer food, shelter, education, and spiritual 
                guidance, empowering them to break the cycle of poverty and build dignified, 
                self-sufficient lives.
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-orange-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where every child has access to love, care, education, and opportunities 
                to thrive. We envision communities where families are restored, children are 
                protected, and hope is renewed through the transformative power of God's love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2014, Berur Street Care International began as a response to God's call 
              to serve the most vulnerable in our society.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Pastor John Berur started this ministry after witnessing the desperate conditions 
              of street children in his community. What began as distributing meals from his 
              own home has grown into a comprehensive organization serving hundreds of children 
              and families across multiple locations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our approach is holistic - we don't just provide temporary relief, but work to 
              address the root causes of homelessness and poverty. Through education, job training, 
              family counseling, and spiritual care, we help individuals and families build 
              sustainable, dignified lives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we operate multiple facilities providing emergency shelter, educational 
              programs, vocational training, and family reunification services. Our work is 
              guided by Christian principles of love, compassion, and service to others.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals leading our mission to transform lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
