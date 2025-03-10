import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TeamMemberCard from '../components/TeamMemberCard';

const Team: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Meet Our Expert Team"
        subtitle="The professionals behind APM Constructions success"
        backgroundImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      />

      {/* Team Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At APM Constructions, our success is driven by our team of highly skilled professionals. With decades of combined experience in the construction industry, our team brings expertise, innovation, and dedication to every project.
            </p>
          </div>

          {/* Leadership Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard 
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              name="Ahmed Khan"
              position="Founder & CEO"
              bio="With over 25 years of experience in the construction industry, Ahmed leads our company with vision and expertise. He holds a Master's degree in Civil Engineering and is committed to delivering excellence in every project."
            />
            <TeamMemberCard 
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
              name="Priya Mehta"
              position="Chief Operations Officer"
              bio="Priya oversees all operational aspects of our projects, ensuring efficiency and quality. With her background in Project Management and 15 years of experience, she ensures smooth execution of every construction project."
            />
            <TeamMemberCard 
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              name="Rajesh Sharma"
              position="Chief Architect"
              bio="Rajesh leads our design team with creativity and technical expertise. His innovative designs have won multiple awards, and he brings 18 years of architectural experience to our projects."
            />
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technical Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our technical team consists of experienced engineers, architects, and construction specialists who bring expertise and innovation to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMemberCard 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              name="Suresh Reddy"
              position="Senior Civil Engineer"
              bio="Suresh specializes in structural engineering and has worked on numerous complex construction projects throughout his 12-year career."
            />
            <TeamMemberCard 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              name="Anita Patel"
              position="Interior Design Specialist"
              bio="Anita brings creativity and functionality to our interior designs, with a keen eye for aesthetics and practical space utilization."
            />
            <TeamMemberCard 
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              name="Vikram Singh"
              position="Project Manager"
              bio="Vikram ensures that our projects are completed on time and within budget, with a focus on quality and client satisfaction."
            />
            <TeamMemberCard 
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80"
              name="Meera Joshi"
              position="Sustainability Expert"
              bio="Meera specializes in sustainable construction practices, helping us incorporate eco-friendly solutions in our projects."
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Team Approach</h2>
              <p className="text-gray-600 mb-4">
                At APM Constructions, we believe in the power of collaboration. Our team works together seamlessly, combining their diverse expertise to deliver exceptional results for our clients.
              </p>
              <p className="text-gray-600 mb-4">
                We foster a culture of innovation, continuous learning, and excellence. Our team members regularly update their skills and knowledge to stay at the forefront of the construction industry.
              </p>
              <p className="text-gray-600 mb-6">
                Every team member is committed to our core values of quality, integrity, and client satisfaction. This shared commitment ensures that we consistently deliver projects that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Collaborative Approach</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Continuous Learning</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Innovative Solutions</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Client-Centric Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are always looking for talented professionals to join our team. If you are passionate about construction and committed to excellence, we'd love to hear from you.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Current Openings</h3>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="text-xl font-semibold mb-2">Senior Project Manager</h4>
                <p className="text-gray-600 mb-3">
                  We are looking for an experienced Project Manager to oversee our residential construction projects. The ideal candidate will have at least 8 years of experience in construction project management.
                </p>
                <Link to="/contact" className="text-red-600 font-medium hover:text-red-800 inline-flex items-center">
                  Apply Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="border-b pb-4">
                <h4 className="text-xl font-semibold mb-2">Civil Engineer</h4>
                <p className="text-gray-600 mb-3">
                  We are seeking a qualified Civil Engineer with experience in commercial construction. The candidate should have a strong understanding of structural engineering and construction methodologies.
                </p>
                <Link to="/contact" className="text-red-600 font-medium hover:text-red-800 inline-flex items-center">
                  Apply Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Interior Designer</h4>
                <p className="text-gray-600 mb-3">
                  We are looking for a creative Interior Designer to join our team. The ideal candidate will have experience in both residential and commercial interior design.
                </p>
                <Link to="/contact" className="text-red-600 font-medium hover:text-red-800 inline-flex items-center">
                  Apply Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Don't see a position that matches your skills? Send us your resume anyway! We're always interested in connecting with talented professionals.
              </p>
              <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                Contact Our HR Team
              </Link>
            </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-4">Work With Our Expert Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to bring your construction project to life? Our team of experts is here to help you every step of the way.
          </p>
          <Link to="/contact" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;