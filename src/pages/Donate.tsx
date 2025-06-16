import { Heart, Shield, Users, CheckCircle, CreditCard, Banknote, Smartphone, Building } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<'monthly' | 'once'>('once');

  const presetAmounts = [25, 50, 100, 250, 500];

  const impactExamples = [
    { amount: 25, impact: 'Provides meals for one child for a week' },
    { amount: 50, impact: 'Covers educational materials for one student for a month' },
    { amount: 100, impact: 'Provides safe shelter for a family for one night' },
    { amount: 250, impact: 'Supports a child\'s education for an entire semester' },
    { amount: 500, impact: 'Funds vocational training for one adult' },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return customAmount ? parseFloat(customAmount) : selectedAmount;
  };

  const getImpactText = () => {
    const amount = getCurrentAmount();
    if (!amount) return '';
    
    const closestImpact = impactExamples.find(item => item.amount <= amount) || impactExamples[0];
    return closestImpact.impact;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Donation Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Donation</h2>
                <p className="text-lg text-gray-600">
                  Every contribution helps transform lives and build stronger communities.
                </p>
              </div>

              {/* Donation Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setDonationType('once')}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      donationType === 'once'
                        ? 'bg-white text-orange-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      donationType === 'monthly'
                        ? 'bg-white text-orange-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Select Amount (USD)
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-lg border-2 font-semibold transition-colors ${
                        selectedAmount === amount
                          ? 'border-orange-600 bg-orange-50 text-orange-600'
                          : 'border-gray-200 hover:border-orange-300 text-gray-900'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                  <input
                    type="number"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>

              {/* Impact Text */}
              {getCurrentAmount() && (
                <div className="bg-blue-50 p-4 rounded-lg mb-8">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-blue-900">Your Impact:</p>
                      <p className="text-blue-800">${getCurrentAmount()} {getImpactText()}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Methods */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" value="card" defaultChecked className="mr-3" />
                    <CreditCard className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" value="bank" className="mr-3" />
                    <Banknote className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="font-medium">Bank Transfer</span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" value="mobile" className="mr-3" />
                    <Smartphone className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="font-medium">Mobile Money</span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" value="vips" className="mr-3" />
                    <Building className="h-5 w-5 text-gray-600 mr-3" />
                    <div>
                      <span className="font-medium">VIPS Transfer</span>
                      <p className="text-sm text-gray-500">VIPS: 962430</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Donate Button */}
              <button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xl font-semibold py-4 rounded-lg transition-colors"
                disabled={!getCurrentAmount()}
              >
                Donate ${getCurrentAmount() || 0} {donationType === 'monthly' ? 'Monthly' : 'Now'}
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Your donation is secure and processed through encrypted channels. 
                You will receive a receipt via email for tax purposes.
              </p>
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
