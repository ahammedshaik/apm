import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Our Projects Portfolio"
        subtitle="Explore our diverse range of successful construction projects across Hyderabad"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      />

      {/* Projects Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Completed Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At APM Constructions, we take pride in our portfolio of successfully completed projects. Each project stands as a testament to our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>

          {/* Project Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full">All Projects</button>
            <button className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-full">Ongoing</button>
            <button className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-full">Completed</button>
            <button className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-full">Upcomming</button>
          </div>

          {/* Projects Grid */}
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
              category="Residential"
              description="A state-of-the-art office building designed for a leading tech company in Hyderabad's IT corridor."
              link="/projects"
            />
            <ProjectCard 
              image="/assets/projects/project3.jpeg"
              title="Municipal Library"
              category="Residential"
              description="A modern public library with digital facilities and sustainable architecture for the community."
              link="/projects"
            />
            <ProjectCard 
              image="/assets/projects/project4.jpeg"
              title="Modern Family Home"
              category="Residential"
              description="A contemporary family residence with open floor plans, energy-efficient systems, and smart home technology."
              link="/projects"
            />
            <ProjectCard 
              image="/assets/projects/project5.jpeg"
              title="Shopping Mall Renovation"
              category="Commercial"
              description="Complete renovation and modernization of a shopping mall, enhancing aesthetics and functionality."
              link="/projects"
            />
            <ProjectCard 
              image="/assets/projects/project6.jpeg"
              title="Community Health Center"
              category="Government"
              description="A healthcare facility designed to serve the local community with modern medical infrastructure."
              link="/projects"
            />
            <ProjectCard 
              image="/assets/projects/project7.jpeg"
              title="Suburban Townhouses"
              category="Residential"
              description="A development of 24 townhouses with contemporary design and community amenities."
              link="/projects"
            />
            <ProjectCard 
              image="/assets/projects/project8.jpeg"
              title="Hotel"
              category="Commercial"
              description="A luxury boutique hotel featuring 30 rooms, a restaurant, and recreational facilities."
              link="/projects"
            />
            <ProjectCard 
              image="/assets/projects/project9.jpeg"
              title="Public School Complex"
              category="Government"
              description="A modern educational facility with classrooms, laboratories, and sports infrastructure."
              link="/projects"
            />
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex">
              <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-l-md">Previous</a>
              <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-red-600 text-white">1</a>
              <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">2</a>
              <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">3</a>
              <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-r-md">Next</a>
            </nav>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Project Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure the successful execution of every project, from initial consultation to final handover.
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

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Rajesh Kumar</h4>
                  <p className="text-gray-600">Luxury Villa Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "APM Constructions delivered our dream home exactly as we envisioned. Their attention to detail and quality of work is exceptional. The project was completed on time and the team was professional throughout the process."
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Priya Sharma</h4>
                  <p className="text-gray-600">CEO, TechSolutions</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Working with APM for our office building was a seamless experience. They understood our requirements perfectly and delivered a space that enhances productivity and reflects our brand identity. Highly recommended!"
              </p>
            </div>
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

export default Projects;