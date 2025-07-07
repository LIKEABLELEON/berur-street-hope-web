
import { Heart, Target, Eye, Users, Award, Globe, Home as HomeIcon, GraduationCap, Shield, HandHeart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  // Core values array for the organization
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

  // What we do - services and programs offered
  const services = [
    {
      icon: HomeIcon,
      title: 'Temporary Shelter',
      description: 'Offer temporary shelter for girls/mothers and their children, assisting them to find more permanent living solutions.'
    },
    {
      icon: Users,
      title: 'Community Activities',
      description: 'Residents participate in all activities in the home and small farm. Center is open for others from the streets to join daily activities.'
    },
    {
      icon: Heart,
      title: 'Counseling Services',
      description: 'Individual and group counseling to provide emotional and psychological support.'
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'Motivate for learning through informal education, sponsor children for school, and arrange training courses.'
    },
    {
      icon: Shield,
      title: 'Prevention & Medical Care',
      description: 'Preventing intervention with at-risk children and providing access to medical services through hospital partnerships.'
    },
    {
      icon: HandHeart,
      title: 'Family Reunification',
      description: 'Assist and encourage family reunion and repatriation. Spiritual nourishment through pastoral visits.'
    }
  ];

  // Causes of street children problem
  const streetCauses = [
    'Child neglect',
    'Abandonment', 
    'Poverty',
    'Family problems/separation',
    'Domestic abuse',
    'Orphaned children',
    'Child misbehavior',
    'Peer influence'
  ];

  // Ways people can help
  const helpWays = [
    'Donation - Goods, clothes, household items etc.',
    'Give work and training opportunities to our clients',
    'Prayers and moral support',
    'Arrange events to raise funds or volunteer in already planned events',
    'Visit our center and see what we are doing'
  ];

  // Team members information
  const teamMembers = [
    {
      name: 'Silas Koech',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Co-founder of Berur Street Care International, dedicated to transforming lives of street children and youth in Eldoret.'
    },
    {
      name: 'Kirsten Vårdal',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Co-founder from Norway, instrumental in establishing the organization with financial and strategic support.'
    },
    {
      name: 'Karianne Wergeland',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Co-founder from Norway, committed to supporting vulnerable children and families in Eldoret.'
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
              through Christ-centered care and rehabilitation since 2007.
            </p>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Background</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Berur Street Care International is a community based, humanitarian organization that was founded in 2007. 
                The organization is based in Eldoret and was established due to knowledge about the growing problem of 
                girls and young mothers living or coming to the streets on a regular basis.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Silas Koech, Kirsten Vårdal and Karianne Wergeland are the founders of the organization. 
                The organization is based on Christian faith and principals and was started with financial support from Norway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our vision is to rehabilitate street children and youth and support them in meaningful activities 
                that will keep them off the streets and give them a better future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our aim is to reduce and with time remove all street children and youth from Eldoret town 
                and help them to live a meaningful life. This aim is to be accomplished through corporation 
                with other rehabilitation centers and the community itself.
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-orange-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Target Beneficiaries</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are targeting children and youth living in the streets of Eldoret. We will focus mainly 
                on girls and young mothers with their children whom in our view are the most vulnerable 
                of the street families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services and programs to support street children and youth in Eldoret.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Street Children Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Street Children Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The street children menace in Eldoret is a real community problem that needs urgent solutions. 
              There is an ever increasing number of street children as a result of many problems.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Root Causes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {streetCauses.map((cause, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{cause}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Can You Help?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways you can support our mission and make a difference in the lives of street children.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="space-y-4">
                {helpWays.map((way, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm font-semibold">{index + 1}</span>
                    </div>
                    <span className="text-lg text-gray-700">{way}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who founded our mission to transform lives.
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
