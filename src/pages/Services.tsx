import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, Building2, PenTool as Tool, PenTool, Briefcase, Wrench, Truck, Users } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Services: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Our Services"
        subtitle="Comprehensive construction solutions tailored to your specific needs"
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
      />

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Construction Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At APM & IQRA Construction Experts, we offer a wide range of construction services to meet all your building needs. From residential and commercial projects to government infrastructure, our team of experts delivers excellence at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Construction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Residential Construction" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <Home className="text-red-600 mr-3" size={32} />
                <h2 className="text-3xl font-bold">Residential Construction</h2>
              </div>
              <p className="text-gray-600 mb-4">
                We specialize in building high-quality residential properties that combine functionality, aesthetics, and comfort. Our residential construction services cater to various housing needs, from individual homes to multi-unit residential complexes.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Custom Homes:</strong> Personalized designs tailored to your preferences and lifestyle.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Apartment Buildings:</strong> Multi-unit residential complexes with modern amenities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Villas & Townhouses:</strong> Luxury residential properties with premium features.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Residential Renovations:</strong> Upgrading and modernizing existing homes.</span>
                </li>
              </ul>
              <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                Inquire About Residential Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Construction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Commercial Construction" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <Building className="text-red-600 mr-3" size={32} />
                <h2 className="text-3xl font-bold">Commercial Construction</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Our commercial construction services focus on creating functional, efficient, and aesthetically pleasing spaces for businesses. We understand the unique requirements of commercial properties and deliver solutions that enhance productivity and brand image.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Office Buildings:</strong> Modern workspaces designed for productivity and employee well-being.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Retail Spaces:</strong> Attractive and functional retail environments that enhance customer experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Hotels & Hospitality:</strong> Luxurious and comfortable accommodations with premium amenities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Industrial Facilities:</strong> Efficient and durable structures for manufacturing and warehousing.</span>
                </li>
              </ul>
              <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                Discuss Commercial Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
                alt="Government Projects" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <Building2 className="text-red-600 mr-3" size={32} />
                <h2 className="text-3xl font-bold">Government Projects</h2>
              </div>
              <p className="text-gray-600 mb-4">
                We have extensive experience in executing government construction projects with precision and compliance. Our team understands the specific requirements and regulations associated with public infrastructure and institutional buildings.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Public Buildings:</strong> Government offices, courts, and administrative centers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Educational Institutions:</strong> Schools, colleges, and universities with modern facilities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Healthcare Facilities:</strong> Hospitals, clinics, and medical centers designed for patient care.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Infrastructure Projects:</strong> Roads, bridges, and public utilities built to last.</span>
                </li>
              </ul>
              <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                Learn About Government Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our core construction services, we offer a range of specialized solutions to meet your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-red-600 mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Project Management</h3>
              <p className="text-gray-600">
                Comprehensive project management services ensuring timely completion, quality control, and budget adherence. We coordinate all aspects of the construction process, from planning to execution.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-red-600 mb-4">
                <PenTool size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Design & Planning</h3>
              <p className="text-gray-600">
                Expert architectural design and construction planning services to transform your vision into reality. Our team works closely with you to create functional and aesthetically pleasing designs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-red-600 mb-4">
                <Wrench size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Renovation & Remodeling</h3>
              <p className="text-gray-600">
                Transform existing spaces with our renovation and remodeling services. We breathe new life into old structures, enhancing functionality and aesthetic appeal.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-red-600 mb-4">
                <Tool size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Interior Finishing</h3>
              <p className="text-gray-600">
                High-quality interior finishing services including flooring, painting, cabinetry, and fixtures. We pay attention to every detail to create beautiful and functional interiors.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-red-600 mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Material Procurement</h3>
              <p className="text-gray-600">
                Sourcing high-quality construction materials at competitive prices. We leverage our industry relationships to ensure you get the best materials for your project.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-red-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation Services</h3>
              <p className="text-gray-600">
                Expert advice on construction planning, design, materials, and cost estimation. Our consultation services help you make informed decisions about your construction project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Construction Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure the successful execution of every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center relative">
              <div className="absolute -top-4 -left-4 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3 mt-4">Consultation & Planning</h3>
              <p className="text-gray-600">
                We begin with a detailed consultation to understand your requirements, followed by comprehensive planning and design.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center relative">
              <div className="absolute -top-4 -left-4 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3 mt-4">Design & Estimation</h3>
              <p className="text-gray-600">
                Our team creates detailed designs and provides transparent cost estimates for your approval.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center relative">
              <div className="absolute -top-4 -left-4 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3 mt-4">Construction & Execution</h3>
              <p className="text-gray-600">
                We execute the project with precision, adhering to quality standards and timelines.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center relative">
              <div className="absolute -top-4 -left-4 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-3 mt-4">Completion & Handover</h3>
              <p className="text-gray-600">
                After thorough quality checks, we hand over the completed project to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Construction Project?</h2>
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

export default Services;