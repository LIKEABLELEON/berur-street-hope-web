import { Heart, Shield, Users, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Donate = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Real Photo Background */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/1ffbb634-fd37-4e11-b8ef-6ae625b05cdc.png"
            alt="Preparing meals for children"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Make a Difference Today</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Your donation directly impacts the lives of street children and families, 
              providing them with hope, care, and opportunities for a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-green-600" />
              <span className="text-lg font-semibold text-gray-900">100% Secure Donations</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <span className="text-lg font-semibold text-gray-900">Registered Non-Profit</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="h-8 w-8 text-green-600" />
              <span className="text-lg font-semibold text-gray-900">Direct Community Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Your Impact Section with Featured Images */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact</h2>
                  <p className="text-lg text-gray-600">
                    Every contribution helps transform lives and build stronger communities.
                  </p>
                </div>

                {/* Impact Information */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-blue-900 text-lg">Your Impact:</p>
                      <p className="text-blue-800 text-lg">$100 provides meals for one child for a week</p>
                    </div>
                  </div>
                </div>

                {/* Payment Accounts Banner */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center">Payment Accounts</h3>
                  <div className="space-y-3">
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <p className="font-medium">VIPS Transfer</p>
                      <p className="text-blue-100">962430</p>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <p className="font-medium">Mpesa Paybill</p>
                      <p className="text-blue-100">Paybill: 0000, Account Number: 1111</p>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <p className="font-medium">PayPal Account</p>
                      <p className="text-blue-100">berurstreetcare@gmail.com</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 text-center mt-4">
                  After making your donation, please send us a confirmation message with your payment details.
                </p>
              </div>
            </div>

            {/* Impact Photos Gallery */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/lovable-uploads/76bd2211-9866-4eca-85b6-590c6bc9c5f4.png"
                  alt="Celebrating achievements with children"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-700 text-center font-medium">Celebrating milestones and achievements</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/lovable-uploads/a41c146c-4592-4ecd-867a-2863e9b519a3.png"
                    alt="Children playing sports"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-2">
                    <p className="text-gray-700 text-sm text-center">Sports & Recreation</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/lovable-uploads/6c2304db-a704-4ed2-afc7-b93780619657.png"
                    alt="Group counseling session"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-2">
                    <p className="text-gray-700 text-sm text-center">Counseling Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Help</h2>
            <p className="text-lg text-gray-600">
              There are many ways you can support our mission beyond financial donations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Join our team of dedicated volunteers and directly impact lives in your community.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sponsor a Child</h3>
              <p className="text-gray-600 mb-4">
                Provide ongoing support for a specific child's education, healthcare, and wellbeing.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Start Sponsoring →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Partnership</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to create sustainable programs and maximize community impact.
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">
                Partner With Us →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
