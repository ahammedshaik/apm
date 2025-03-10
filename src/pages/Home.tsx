import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Building, Building2, Briefcase, Users, Award, CheckCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Building Excellence in Hyderabad"
        subtitle="APM Constructions - Your trusted partner for residential, commercial, and government construction projects."
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      />

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Construction site" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About APM Constructions</h2>
              <p className="text-gray-600 mb-4">
                With over a decade of experience in the construction industry, APM Constructions has established itself as one of the leading construction companies in Hyderabad. We specialize in residential, commercial, and government construction projects.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of highly skilled professionals is committed to delivering exceptional quality, innovative solutions, and timely project completion. We take pride in our attention to detail and our ability to bring our clients' visions to life.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="text-red-600 mr-2" size={20} />
                  <span>Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-red-600 mr-2" size={20} />
                  <span>Timely Delivery</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-red-600 mr-2" size={20} />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-red-600 mr-2" size={20} />
                  <span>Innovative Solutions</span>
                </div>
              </div>
              <Link to="/about" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of construction services to meet all your building needs. Our expertise spans across various domains of construction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<HomeIcon size={40} />}
              title="Residential Construction"
              description="Custom homes, apartments, villas, and residential complexes built to the highest standards of quality and comfort."
              link="/services"
            />
            <ServiceCard 
              icon={<Building size={40} />}
              title="Commercial Construction"
              description="Office buildings, retail spaces, hotels, and other commercial structures designed for functionality and aesthetic appeal."
              link="/services"
            />
            <ServiceCard 
              icon={<Building2 size={40} />}
              title="Government Projects"
              description="Public infrastructure, government buildings, and institutional projects executed with precision and compliance."
              link="/services"
            />
            <ServiceCard 
              icon={<Briefcase size={40} />}
              title="Project Management"
              description="Comprehensive project management services ensuring timely completion, quality control, and budget adherence."
              link="/services"
            />
            <ServiceCard 
              icon={<Users size={40} />}
              title="Consultation Services"
              description="Expert advice on construction planning, design, materials, and cost estimation for your projects."
              link="/services"
            />
            <ServiceCard 
              icon={<Award size={40} />}
              title="Renovation & Remodeling"
              description="Transform existing spaces with our renovation and remodeling services, breathing new life into old structures."
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Recent Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recently completed projects that showcase our expertise, quality, and commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              image="/assets/projects/project1.jpeg"
              title="Luxury Villa Complex"
              category="Residential"
              description="A premium residential complex featuring 12 luxury villas with modern amenities and sustainable design."
              link="/projects"
            />
            <ProjectCard 
              image="/assets/projects/project2.jpeg"
              title="Corporate Headquarters"
              category="Commercial"
              description="A state-of-the-art office building designed for a leading tech company in Hyderabad's IT corridor."
              link="/projects"
            />
            <ProjectCard 
              image="/assets/projects/project3.jpeg"
              title="Municipal Library"
              category="Government"
              description="A modern public library with digital facilities and sustainable architecture for the community."
              link="/projects"
            />
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services and projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="APM Constructions delivered our dream home exactly as we envisioned. Their attention to detail and quality of work is exceptional."
              name="Rajesh Kumar"
              title="Homeowner"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <TestimonialCard 
              quote="Working with APM for our office building was a seamless experience. They completed the project on time and within budget."
              name="Priya Sharma"
              title="CEO, TechSolutions"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <TestimonialCard 
              quote="The municipal project handled by APM Constructionss was executed with utmost professionalism and adherence to all regulations."
              name="Suresh Reddy"
              title="Municipal Commissioner"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-4">Ready to Start Your Construction Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us bring your construction vision to life.
          </p>
          <Link to="/contact" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;