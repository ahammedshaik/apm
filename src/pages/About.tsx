import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Clock, Users, Shield, Target } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="About APM Constructionss"
        subtitle="Learn about our journey, values, and commitment to excellence in construction"
        backgroundImage="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1737&q=80"
      />

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1739&q=80" 
                alt="Our company" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, APM Constructions began as a small team of passionate construction professionals with a vision to transform the construction landscape in Hyderabad. Over the years, we have grown into one of the most trusted construction companies in the region.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been marked by a relentless pursuit of excellence, innovation, and customer satisfaction. We have successfully completed numerous projects across residential, commercial, and government sectors, each standing as a testament to our quality and craftsmanship.
              </p>
              <p className="text-gray-600 mb-6">
                Today, APM Construction is recognized for its commitment to quality, timely delivery, and exceptional customer service. We continue to grow and evolve, embracing new technologies and sustainable practices to deliver construction solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by our core values, we strive to deliver excellence in every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To deliver high-quality construction services that exceed client expectations, while maintaining the highest standards of safety, integrity, and environmental responsibility.
              </p>
              <p className="text-gray-600">
                We are committed to building structures that stand the test of time, fostering long-term relationships with our clients, and contributing positively to the communities we serve.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be the most trusted and respected construction company in Hyderabad, known for our innovative solutions, exceptional quality, and unwavering commitment to client satisfaction.
              </p>
              <p className="text-gray-600">
                We aspire to set new benchmarks in the construction industry through continuous improvement, adoption of cutting-edge technologies, and sustainable building practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our actions and decisions in every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, from planning and design to execution and delivery.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <Shield size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices, building trust with our clients and partners.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Timeliness</h3>
              <p className="text-gray-600">
                We value our clients' time and are committed to delivering projects on schedule without compromising on quality.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Teamwork</h3>
              <p className="text-gray-600">
                We believe in the power of collaboration, fostering a culture of teamwork, respect, and mutual support.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <Target size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and continuously seek new ways to improve our processes, techniques, and solutions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality in every project, paying attention to even the smallest details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose APM Constructions?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a unique combination of expertise, quality, and customer-focused service that sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-red-600 mr-4 mt-1">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                <p className="text-gray-600">
                  Our team consists of highly skilled professionals with years of experience in the construction industry.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-red-600 mr-4 mt-1">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  We maintain rigorous quality control standards throughout the construction process.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-red-600 mr-4 mt-1">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                <p className="text-gray-600">
                  We are committed to completing projects on schedule without compromising on quality.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-red-600 mr-4 mt-1">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  We provide clear, detailed cost estimates with no hidden charges or surprises.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-red-600 mr-4 mt-1">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customer-Centric Approach</h3>
                <p className="text-gray-600">
                  We prioritize our clients' needs and preferences, ensuring their vision is brought to life.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-red-600 mr-4 mt-1">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
                <p className="text-gray-600">
                  We incorporate eco-friendly materials and energy-efficient designs in our projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and how we can help bring your vision to life.
          </p>
          <Link to="/contact" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;