import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Heart, 
  Star, 
  Users, 
  Download, 
  Phone,
  Mail,
  MapPin,
  Award,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Utensils,
  Timer,
  Truck,
  Shield,
  Target,
  Zap,
  ChefHat,
  Sparkles
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showChefForm, setShowChefForm] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'how-it-works', 'stats', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  if (showChefForm) {
    return <ChefOnboardingPage onBack={() => setShowChefForm(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 animate-bounce-gentle">
              <div className="w-12 h-12 bg-[#FFB220] rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 animate-pulse-soft">
                <img 
                  src="/image.png" 
                  alt="Bhookle Logo" 
                  className="w-10 h-10 object-contain animate-wiggle"
                />
              </div>
              <img 
  src="/image copy.png" 
  alt="Bhookle" 
  className="h-16 animate-none border-none shadow-none outline-none m-0 p-0 bg-transparent"
/>


            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'how-it-works', label: 'How it Works' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-all duration-300 hover:scale-105 animate-fade-in-stagger ${
                    activeSection === id 
                      ? 'text-[#FFB220] font-semibold transform scale-105 animate-pulse' 
                      : 'text-[#444444] hover:text-[#FFB220]'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => setShowChefForm(true)}
                className="bg-[#341c3c] text-white px-4 py-2 rounded-lg hover:bg-[#341c3c]/90 transition-all duration-300 transform hover:scale-105 animate-shimmer"
              >
                <ChefHat className="inline w-4 h-4 mr-2" />
                Become a Chef
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#341c3c] hover:text-[#FFB220] transition-colors animate-spin-on-hover"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t shadow-lg animate-slide-down-bounce">
            <div className="px-4 py-4 space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'how-it-works', label: 'How it Works' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left py-2 text-[#444444] hover:text-[#FFB220] transition-colors animate-slide-in-left"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => setShowChefForm(true)}
                className="block w-full text-left py-2 text-[#341c3c] font-semibold animate-slide-in-left"
              >
                Become a Chef
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-[#FFB220]/10 via-white to-[#341c3c]/5 relative overflow-hidden min-h-screen flex items-center">
        {/* Animated food background pattern */}
        <div className="absolute inset-0 opacity-5 animate-float-slow">
          <div 
            className="w-full h-full bg-repeat animate-drift"
            style={{
              backgroundImage: `url('/image copy copy.png')`,
              backgroundSize: '200px 200px'
            }}
          ></div>
        </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-[#341c3c] mb-6">
      Authentic Home-Cooked 
      <span className="text-[#FFB220] block">Food Delivered</span>
    </h1>
    <p className="text-xl text-[#444444] mb-8 max-w-3xl mx-auto">
      Experience the warmth of home-cooked meals prepared by local chefs. 
      Fresh, authentic, and delivered to your doorstep with love.
    </p>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-bounce-in">
              <a
                href="https://play.google.com/store/apps/details?id=com.id.Bhookle&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#341c3c] text-white px-6 py-4 rounded-lg hover:bg-[#341c3c]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-glow-pulse"
              >
                <svg className="h-8 w-8 animate-bounce-gentle" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-90">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
              <a
                href="https://apps.apple.com/in/app/bhookle/id6449941707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#FFB220] text-[#341c3c] px-6 py-4 rounded-lg hover:bg-[#FFB220]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-glow-pulse-alt"
              >
                <svg className="h-8 w-8 animate-bounce-gentle" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
            </div>

            {/* Get Now vs Get Later */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-slide-up-stagger">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#FFB220]/20 hover:border-[#FFB220]/40 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-card-float">
                <div className="flex items-center justify-center w-16 h-16 bg-[#FFB220]/10 rounded-full mx-auto mb-4 animate-pulse-soft">
                  <Timer className="h-8 w-8 text-[#FFB220] animate-tick" />
                </div>
                <h3 className="text-2xl font-bold text-[#341c3c] mb-3 animate-text-glow">Get Now</h3>
                <p className="text-[#444444] mb-4">Instant order with limited menu</p>
                <div className="text-[#FFB220] font-bold text-lg mb-4 animate-pulse">Delivery in 90 minutes ⚡</div>
                <ul className="text-left space-y-2 text-sm text-[#444444]">
                  <li className="flex items-center space-x-2 animate-slide-in-left">
                    <CheckCircle className="h-4 w-4 text-[#FFB220] animate-check" />
                    <span>Curated popular dishes 🍛</span>
                  </li>
                  <li className="flex items-center space-x-2 animate-slide-in-left-delayed">
                    <CheckCircle className="h-4 w-4 text-[#FFB220] animate-check" />
                    <span>Perfect for quick cravings 🤤</span>
                  </li>
                  <li className="flex items-center space-x-2 animate-slide-in-left-delayed-2">
                    <CheckCircle className="h-4 w-4 text-[#FFB220] animate-check" />
                    <span>Ready-to-eat meals 🍽️</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#341c3c]/20 hover:border-[#341c3c]/40 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-card-float-delayed">
                <div className="flex items-center justify-center w-16 h-16 bg-[#341c3c]/10 rounded-full mx-auto mb-4 animate-pulse-soft-delayed">
                  <Clock className="h-8 w-8 text-[#341c3c] animate-tick-delayed" />
                </div>
                <h3 className="text-2xl font-bold text-[#341c3c] mb-3 animate-text-glow-alt">Get Later</h3>
                <p className="text-[#444444] mb-4">Full menu within 24hrs delivery</p>
                <div className="text-[#341c3c] font-bold text-lg mb-4 animate-pulse">Schedule your order 📅</div>
                <ul className="text-left space-y-2 text-sm text-[#444444]">
                  <li className="flex items-center space-x-2 animate-slide-in-right">
                    <CheckCircle className="h-4 w-4 text-[#341c3c] animate-check" />
                    <span>Complete menu selection 🍜</span>
                  </li>
                  <li className="flex items-center space-x-2 animate-slide-in-right-delayed">
                    <CheckCircle className="h-4 w-4 text-[#341c3c] animate-check" />
                    <span>Schedule for your convenience ⏰</span>
                  </li>
                  <li className="flex items-center space-x-2 animate-slide-in-right-delayed-2">
                    <CheckCircle className="h-4 w-4 text-[#341c3c] animate-check" />
                    <span>Freshly prepared to order 👨‍🍳</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-[#fffaf0] relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#341c3c] mb-4">
        How It Works
      </h2>
      <p className="text-xl text-[#444444] max-w-2xl mx-auto">
        Simple steps to get delicious home-cooked meals delivered to your door
      </p>
    </div>

    <div className="relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
        {[
          {
            step: 1,
            icon: <Download className="h-8 w-8" />,
            title: "Download App",
            description: "Get the Bhookle app from Play Store or App Store",
          },
          {
            step: 2,
            icon: <Utensils className="h-8 w-8" />,
            title: "Browse Menu",
            description: "Choose from Get Now or Get Later options based on your needs",
          },
          {
            step: 3,
            icon: <Heart className="h-8 w-8" />,
            title: "Place Order",
            description: "Select your home-cooked meals and customize as needed",
          },
          {
            step: 4,
            icon: <Truck className="h-8 w-8" />,
            title: "Enjoy Delivery",
            description: "Receive fresh, authentic meals prepared with love",
          },
        ].map(({ step, icon, title, description }, index) => (
          <div key={step} className="group relative text-center">
            {/* Zigzag connector line (like a road) */}
            {index < 3 && (
              <div className="absolute top-1/2 right-0 w-full h-1 bg-gradient-to-r from-[#FFB220] to-[#341c3c] z-0 hidden md:block transform translate-y-1/2"></div>
            )}

            {/* Step Card */}
            <div className="relative z-10 p-6 bg-white rounded-3xl border-4 border-[#FFB220] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#fff3e0]">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-[#FFB220] text-white rounded-full shadow-lg">
                  {icon}
                </div>
              </div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#341c3c] text-white rounded-full flex items-center justify-center font-bold shadow-md">
                {step}
              </div>
              <h3 className="text-lg font-semibold text-[#341c3c] mb-2 mt-4">
                {title}
              </h3>
              <p className="text-sm text-[#444444]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



     {/* Food Gallery Section */}
<section className="py-20 bg-white relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-[#FFB220]/5 to-[#341c3c]/5 animate-gradient-shift"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#341c3c] mb-4 animate-fade-in-up">
        Delicious Home-Cooked Meals
      </h2>
      <p className="text-xl text-[#444444] max-w-2xl mx-auto animate-fade-in-up-delayed">
        Authentic flavors prepared with love by our local chefs
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { image: "/images/food/biriyani.jpg", name: "Biryani", desc: "Aromatic rice dish" },
        { image: "/images/food/curry.jpg", name: "Curry", desc: "Rich & flavorful" },
        { image: "/images/food/noodles.jpg", name: "Noodles", desc: "Comfort food" },
        { image: "/images/food/salad.jpg", name: "Salads", desc: "Fresh & healthy" },
        { image: "/images/food/dal.jpg", name: "Dal", desc: "Protein-rich lentils" },
        { image: "/images/food/roti.png", name: "Roti", desc: "Fresh bread" },
        { image: "/images/food/thali.jpg", name: "Thali", desc: "Complete meal" },
        { image: "/images/food/snacks.jpg", name: "Snacks", desc: "Crispy treats" }
      ].map(({ image, name, desc }, index) => (
        <div 
          key={name}
          className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <h3 className="font-semibold text-[#341c3c] mb-1 text-center">{name}</h3>
          <p className="text-sm text-[#444444] text-center">{desc}</p>
        </div>
      ))}
    </div>

    {/* CTA Section */}
    <div className="text-center mt-12 bg-[#FFB220]/10 py-8 px-6 rounded-xl shadow-inner border border-[#FFB220] max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-[#341c3c] mb-3">
        Craving more?
      </h3>
      <p className="text-lg text-[#444444] mb-5">
        Hundreds of mouth-watering home-cooked dishes are waiting for you in the <span className="text-[#FFB220] font-semibold">Bhookle App</span>! Explore, order, and enjoy the magic of local chefs.
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=com.id.Bhookle&hl=en_IN"
        className="inline-block px-6 py-3 bg-[#341c3c] text-white rounded-full font-semibold hover:bg-[#FFB220] transition"
      >
        Download the App Now
      </a>
    </div>
  </div>
</section>

      {/* About Us */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#FFB220] animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#341c3c] animate-blob-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#341c3c] mb-4 animate-fade-in-up">About Bhookle</h2>
            <p className="text-xl text-[#444444] max-w-3xl mx-auto animate-fade-in-up-delayed">
              We're passionate about bringing the authentic taste of home-cooked meals to your doorstep, 
              connecting local chefs with food lovers across the city.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-card-rise">
              <Target className="h-12 w-12 text-[#FFB220] mx-auto mb-4 animate-target-pulse" />
              <h3 className="text-xl font-semibold text-[#341c3c] mb-3 animate-text-glow">Our Mission</h3>
              <p className="text-[#444444] animate-fade-in">
                To preserve and celebrate authentic home cooking traditions while providing convenient access to nutritious, 
                home-style meals for busy individuals and families.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-card-rise-delayed">
              <Shield className="h-12 w-12 text-[#341c3c] mx-auto mb-4 animate-shield-glow" />
              <h3 className="text-xl font-semibold text-[#341c3c] mb-3 animate-text-glow">Our Values</h3>
              <p className="text-[#444444] animate-fade-in">
                Quality, authenticity, and trust are at the heart of everything we do. We ensure every meal 
                meets our high standards for taste, nutrition, and food safety.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-card-rise-delayed-2">
              <Zap className="h-12 w-12 text-[#FFB220] mx-auto mb-4 animate-zap-flash" />
              <h3 className="text-xl font-semibold text-[#341c3c] mb-3 animate-text-glow">Our Vision</h3>
              <p className="text-[#444444] animate-fade-in">
                To become India's most trusted platform for authentic home-cooked food, empowering local chefs 
                and bringing communities together through the love of food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section id="stats" className="py-20 bg-[#341c3c] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full border border-[#FFB220] animate-spin-slow"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 rotate-45 border border-[#FFB220] animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-[#FFB220] animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Our Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fade-in-up-delayed">
              Numbers that reflect our commitment to bringing authentic home-cooked meals to your table
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: 50000, label: "Happy Customers", suffix: "+", emoji: "😊" },
              { number: 25000, label: "App Downloads", suffix: "+", emoji: "📱" },
              { number: 100000, label: "Meals Served", suffix: "+", emoji: "🍽️" },
              { number: 500, label: "Local Chefs", suffix: "+", emoji: "👨‍🍳" }
            ].map(({ number, label, suffix, emoji }, index) => (
              <div 
                key={label} 
                className="text-center transform hover:scale-110 transition-transform duration-300 animate-stat-reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-2 animate-emoji-bounce">{emoji}</div>
                <div className="text-4xl md:text-5xl font-bold text-[#FFB220] mb-2 animate-counter-up">
                  <AnimatedCounter end={number} suffix={suffix} />
                </div>
                <div className="text-lg opacity-90 animate-fade-in">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFB220]/3 to-[#341c3c]/3 animate-gradient-shift"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#341c3c] mb-4 animate-fade-in-up">
              Recognition & Awards
            </h2>
            <p className="text-xl text-[#444444] max-w-2xl mx-auto animate-fade-in-up-delayed">
              Proud to be recognized for our commitment to quality and service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Best Food Delivery App 2024", organization: "Food Tech Awards", emoji: "🏆" },
              { title: "People's Choice Award", organization: "Local Business Excellence", emoji: "🥇" },
              { title: "Innovation in Food Service", organization: "Startup India Recognition", emoji: "🌟" }
            ].map(({ title, organization, emoji }, index) => (
              <div 
                key={title} 
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-award-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4 animate-trophy-shine">{emoji}</div>
                <Award className="h-12 w-12 text-[#FFB220] mx-auto mb-4 animate-award-glow" />
                <h3 className="text-xl font-semibold text-[#341c3c] mb-2 animate-text-glow">{title}</h3>
                <p className="text-[#444444] animate-fade-in">{organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full bg-repeat animate-drift-reverse"
            style={{
              backgroundImage: `url('/image copy copy.png')`,
              backgroundSize: '100px 100px'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#341c3c] mb-4 animate-fade-in-up">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                rating: 5,
                comment: "Finally found a service that delivers authentic home-cooked meals! The taste reminds me of my mother's cooking.",
                emoji: "😍"
              },
              {
                name: "Rajesh Kumar",
                rating: 5,
                comment: "The Get Later option is perfect for meal planning. Fresh food delivered exactly when I need it.",
                emoji: "👌"
              },
              {
                name: "Anita Patel",
                rating: 5,
                comment: "Amazing variety and quality. The local chefs really know how to make traditional dishes perfectly.",
                emoji: "🤤"
              }
            ].map(({ name, rating, comment, emoji }, index) => (
              <div 
                key={name} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-testimonial-slide"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-4 animate-emoji-bounce">{emoji}</div>
                <div className="flex mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-[#FFB220] fill-current animate-star-twinkle" 
                      style={{ animationDelay: `${i * 0.1}s` }} 
                    />
                  ))}
                </div>
                <p className="text-[#444444] mb-4 italic animate-text-reveal">"{comment}"</p>
                <div className="font-semibold text-[#341c3c] animate-text-glow">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB220]/5 to-[#341c3c]/5 animate-gradient-shift"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#341c3c] mb-4 animate-fade-in-up">
              Get in Touch
            </h2>
            <p className="text-xl text-[#444444] max-w-2xl mx-auto animate-fade-in-up-delayed">
              Have questions or feedback? We'd love to hear from you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-[#341c3c] mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 animate-contact-item">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#FFB220]/10 rounded-lg animate-icon-glow">
                    <Phone className="h-6 w-6 text-[#FFB220]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#341c3c]">Phone</div>
                    <div className="text-[#444444]">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-contact-item-delayed">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#FFB220]/10 rounded-lg animate-icon-glow">
                    <Mail className="h-6 w-6 text-[#FFB220]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#341c3c]">Email</div>
                    <div className="text-[#444444]">hello@bhookle.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-contact-item-delayed-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#FFB220]/10 rounded-lg animate-icon-glow">
                    <MapPin className="h-6 w-6 text-[#FFB220]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#341c3c]">Address</div>
                    <div className="text-[#444444]">123 Food Street, Bangalore, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form className="space-y-6">
                <div className="animate-form-field">
                  <label className="block text-sm font-medium text-[#341c3c] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                    placeholder="Your name"
                  />
                </div>
                <div className="animate-form-field-delayed">
                  <label className="block text-sm font-medium text-[#341c3c] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="animate-form-field-delayed-2">
                  <label className="block text-sm font-medium text-[#341c3c] mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="animate-form-field-delayed-3">
                  <label className="block text-sm font-medium text-[#341c3c] mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FFB220] text-[#341c3c] py-4 px-6 rounded-lg hover:bg-[#FFB220]/90 transition-all duration-300 font-semibold transform hover:scale-105 animate-button-pulse"
                >
                  Send Message 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#341c3c] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full bg-repeat animate-drift-slow"
            style={{
              backgroundImage: `url('/image copy copy.png')`,
              backgroundSize: '80px 80px'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-footer-slide">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#FFB220] rounded-lg flex items-center justify-center animate-logo-glow">
                  <img 
                    src="/image.png" 
                    alt="Bhookle Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <img 
                  src="/image copy.png" 
                  alt="Bhookle" 
                  className="h-6 animate-glow"
                />
              </div>
              <p className="text-gray-300 mb-4 animate-text-reveal">
                Bringing authentic home-cooked meals to your doorstep with love and care.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.id.Bhookle&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFB220] hover:text-white transition-colors transform hover:scale-110 animate-icon-bounce"
                >
                  <Download className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="animate-footer-slide-delayed">
              <h3 className="text-lg font-semibold mb-4 animate-text-glow">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-[#FFB220] transition-colors animate-link-hover">Home</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#FFB220] transition-colors animate-link-hover">How it Works</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-[#FFB220] transition-colors animate-link-hover">About</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#FFB220] transition-colors animate-link-hover">Contact</button></li>
              </ul>
            </div>

            <div className="animate-footer-slide-delayed-2">
              <h3 className="text-lg font-semibold mb-4 animate-text-glow">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="animate-service-item">Get Now - 90 Min Delivery ⚡</li>
                <li className="animate-service-item-delayed">Get Later - Scheduled Orders 📅</li>
                <li className="animate-service-item-delayed-2">Chef Partnership 👨‍🍳</li>
                <li className="animate-service-item-delayed-3">Corporate Catering 🏢</li>
              </ul>
            </div>

            <div className="animate-footer-slide-delayed-3">
              <h3 className="text-lg font-semibold mb-4 animate-text-glow">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2 animate-contact-info">
                  <Phone className="h-4 w-4 animate-icon-pulse" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 animate-contact-info-delayed">
                  <Mail className="h-4 w-4 animate-icon-pulse" />
                  <span>hello@bhookle.com</span>
                </div>
                <div className="flex items-center space-x-2 animate-contact-info-delayed-2">
                  <MapPin className="h-4 w-4 animate-icon-pulse" />
                  <span>Bangalore, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300 animate-footer-bottom">
            <p>&copy; 2024 Bhookle. All rights reserved. Made with ❤️ for food lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Chef Onboarding Page Component
function ChefOnboardingPage({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFB220]/10 via-white to-[#341c3c]/5 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-repeat animate-drift"
          style={{
            backgroundImage: `url('/image copy copy.png')`,
            backgroundSize: '150px 150px'
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-bounce-gentle">
              <div className="w-10 h-10 bg-[#FFB220] rounded-lg flex items-center justify-center animate-logo-glow">
                <img 
                  src="/image.png" 
                  alt="Bhookle Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <img 
                src="/image copy.png" 
                alt="Bhookle" 
                className="h-6 animate-glow"
              />
            </div>
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-[#444444] hover:text-[#FFB220] transition-colors animate-back-button"
            >
              <ArrowRight className="h-5 w-5 rotate-180 animate-arrow-bounce" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chef Onboarding Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-12">
          <div className="animate-chef-icon">
            <ChefHat className="h-16 w-16 text-[#FFB220] mx-auto mb-4 animate-chef-bounce" />
          </div>
          <h1 className="text-4xl font-bold text-[#341c3c] mb-4 animate-title-reveal">
            Join Our Chef Community
          </h1>
          <p className="text-xl text-[#444444] max-w-2xl mx-auto animate-subtitle-reveal">
            Share your passion for authentic home cooking and earn with Bhookle. 
            Fill out the form below to start your journey with us.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl animate-form-container-rise">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-form-field">
                <label className="block text-sm font-medium text-[#341c3c] mb-2">
                  Full Name <span className="text-red-500 animate-required-star">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                  placeholder="Your full name"
                />
              </div>
              <div className="animate-form-field-delayed">
                <label className="block text-sm font-medium text-[#341c3c] mb-2">
                  Phone Number <span className="text-red-500 animate-required-star">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-form-field-delayed-2">
                <label className="block text-sm font-medium text-[#341c3c] mb-2">
                  Email <span className="text-red-500 animate-required-star">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                  placeholder="your@email.com"
                />
              </div>
              <div className="animate-form-field-delayed-3">
                <label className="block text-sm font-medium text-[#341c3c] mb-2">
                  City <span className="text-red-500 animate-required-star">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                  placeholder="Your city"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-form-field-delayed-4">
                <label className="block text-sm font-medium text-[#341c3c] mb-2">
                  Area <span className="text-red-500 animate-required-star">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                  placeholder="Your area/locality"
                />
              </div>
              <div className="animate-form-field-delayed-5">
                <label className="block text-sm font-medium text-[#341c3c] mb-2">
                  Specialty Cuisine <span className="text-red-500 animate-required-star">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                  placeholder="e.g., North Indian, South Indian, Bengali"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-form-field-delayed-6">
                <label className="block text-sm font-medium text-[#341c3c] mb-3">
                  Food Type <span className="text-red-500 animate-required-star">*</span>
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center animate-radio-option">
                    <input
                      type="radio"
                      name="foodType"
                      value="veg"
                      className="w-4 h-4 text-[#FFB220] border-gray-300 focus:ring-[#FFB220] animate-radio-glow"
                    />
                    <span className="ml-2 text-[#444444]">Vegetarian 🥬</span>
                  </label>
                  <label className="flex items-center animate-radio-option-delayed">
                    <input
                      type="radio"
                      name="foodType"
                      value="non-veg"
                      className="w-4 h-4 text-[#FFB220] border-gray-300 focus:ring-[#FFB220] animate-radio-glow"
                    />
                    <span className="ml-2 text-[#444444]">Non-Vegetarian 🍖</span>
                  </label>
                </div>
              </div>
              <div className="animate-form-field-delayed-7">
                <label className="block text-sm font-medium text-[#341c3c] mb-3">
                  FSSAI Registration <span className="text-red-500 animate-required-star">*</span>
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center animate-radio-option">
                    <input
                      type="radio"
                      name="fssai"
                      value="yes"
                      className="w-4 h-4 text-[#FFB220] border-gray-300 focus:ring-[#FFB220] animate-radio-glow"
                    />
                    <span className="ml-2 text-[#444444]">Yes ✅</span>
                  </label>
                  <label className="flex items-center animate-radio-option-delayed">
                    <input
                      type="radio"
                      name="fssai"
                      value="no"
                      className="w-4 h-4 text-[#FFB220] border-gray-300 focus:ring-[#FFB220] animate-radio-glow"
                    />
                    <span className="ml-2 text-[#444444]">No ❌</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="animate-form-field-delayed-8">
              <label className="block text-sm font-medium text-[#341c3c] mb-2">
                Experience & Background <span className="text-red-500 animate-required-star">*</span>
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                placeholder="Tell us about your cooking experience, specialties, and what makes your food special..."
              ></textarea>
            </div>

            <div className="animate-form-field-delayed-9">
              <label className="block text-sm font-medium text-[#341c3c] mb-2">
                Why do you want to join Bhookle?
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB220] focus:border-transparent transition-all duration-200 hover:border-[#FFB220]/50 animate-input-glow"
                placeholder="Share your motivation and goals..."
              ></textarea>
            </div>

            <div className="flex items-center space-x-2 animate-checkbox-container">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 text-[#FFB220] border-gray-300 rounded focus:ring-[#FFB220] animate-checkbox-glow"
              />
              <label htmlFor="terms" className="text-sm text-[#444444]">
                I agree to the <span className="text-[#FFB220] hover:underline cursor-pointer animate-link-glow">Terms and Conditions</span> and <span className="text-[#FFB220] hover:underline cursor-pointer animate-link-glow">Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#341c3c] text-white py-4 px-6 rounded-lg hover:bg-[#341c3c]/90 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold transform hover:scale-105 animate-submit-button"
            >
              <span>Submit Application</span>
              <ArrowRight className="h-5 w-5 animate-arrow-bounce" />
              <span className="animate-rocket">🚀</span>
            </button>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg animate-info-card">
            <Users className="h-12 w-12 text-[#FFB220] mx-auto mb-4 animate-users-icon" />
            <h3 className="text-lg font-semibold text-[#341c3c] mb-2 animate-text-glow">Join 500+ Chefs</h3>
            <p className="text-[#444444] text-sm animate-fade-in">Be part of our growing community of talented home chefs</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg animate-info-card-delayed">
            <Heart className="h-12 w-12 text-[#FFB220] mx-auto mb-4 animate-heart-beat" />
            <h3 className="text-lg font-semibold text-[#341c3c] mb-2 animate-text-glow">Flexible Schedule</h3>
            <p className="text-[#444444] text-sm animate-fade-in">Cook when you want, earn on your own terms</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg animate-info-card-delayed-2">
            <Award className="h-12 w-12 text-[#FFB220] mx-auto mb-4 animate-award-glow" />
            <h3 className="text-lg font-semibold text-[#341c3c] mb-2 animate-text-glow">Quality Support</h3>
            <p className="text-[#444444] text-sm animate-fade-in">Get training and support to succeed with us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;