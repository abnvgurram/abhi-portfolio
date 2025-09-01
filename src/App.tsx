import React, { useState, useEffect } from 'react';
import { ArrowUp, ExternalLink, Mail, Phone, Linkedin, Instagram, Eye } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import profileImage from 'figma:asset/23c7d3da44b24a3a6f263408fe2889202779d4c9.png';

interface Project {
  id: string;
  title: string;
  category: 'Website' | 'Mobile App';
  description: string;
  client: string;
  details: string;
  figmaUrl: string;
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Ayurveda Hospital Management',
    category: 'Mobile App',
    description: 'An app for an ayurveda hospital to manage drugs and patient records efficiently.',
    client: 'Ayurveda Hospital',
    details: 'Healthcare Management System',
    figmaUrl: 'https://www.figma.com/design/hNj3LR42fwiqlDTkOdvf76/Ant-Forge-Project',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Billmate - Staff & Billing System',
    category: 'Mobile App',
    description: 'An app for industry that manages staff, generates and prints bills efficiently.',
    client: 'Sandeep, A businessman',
    details: 'Business Management System',
    figmaUrl: 'https://www.figma.com/design/hNj3LR42fwiqlDTkOdvf76/Ant-Forge-Project',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop'
  },
  {
    id: '3',
    title: 'Juke Sync - Music Playlist App',
    category: 'Mobile App',
    description: 'A mobile app created for playing music with playlist management features.',
    client: 'Personal Project',
    details: 'Music & Entertainment',
    figmaUrl: 'https://www.figma.com/design/fddircDNukJvjugaB0Wv2t/Juke-Sync---A-Music-Playlist--App',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop'
  },
  {
    id: '4',
    title: 'Recipe Nest - Recipe Platform',
    category: 'Website',
    description: 'A website for creating, browsing, and sharing recipes with community features.',
    client: 'Internshala Certification Project',
    details: 'Food & Recipe Platform',
    figmaUrl: 'https://www.figma.com/design/NXHN38BBXC8jc1PeC9wwuZ/Recipenest---Capstone-Project',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop'
  },
  {
    id: '5',
    title: 'Aero Nova - Flight Booking',
    category: 'Website',
    description: 'A simple flight booking website for one-way flight reservations.',
    client: 'Personal Project',
    details: 'Travel & Booking',
    figmaUrl: 'https://www.figma.com/design/D5q31474UiXBO8MBxLU2JE/Aero-Nova',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop'
  },
  {
    id: '6',
    title: 'Events Management App',
    category: 'Mobile App',
    description: 'A mobile app for managing events such as new year home parties and social gatherings.',
    client: 'Internshala Certification Project',
    details: 'Event Management',
    figmaUrl: 'https://www.figma.com/design/wQ6HzOFH8cc0DEYiiFIAxv/Events-Website---Mobile-App',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop'
  },
  {
    id: '7',
    title: 'Furniture E-commerce App',
    category: 'Mobile App',
    description: 'A mobile app for selling furniture with catalog browsing and purchase features.',
    client: 'Personal Project',
    details: 'E-commerce & Retail',
    figmaUrl: 'https://www.figma.com/design/fLLYYvtcwEEifDSTrYs6aC/Mob-App',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop'
  },
  {
    id: '8',
    title: 'Blogging Platform',
    category: 'Website',
    description: 'A simple blogging website with content management and publishing features.',
    client: 'Personal Project',
    details: 'Content Management',
    figmaUrl: 'https://www.figma.com/design/UMOxe9ABparU3jMhb8R3yy/website--Copy',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop'
  },
  {
    id: '9',
    title: 'Brickplan Infra Associates',
    category: 'Website',
    description: 'Corporate website designed for Brickplan Infra Associates with business information and services.',
    client: 'Brickplan Infra Associates',
    details: 'Corporate Website',
    figmaUrl: 'http://brickplan.in/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop'
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Website' | 'Mobile App'>('All');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2a3543' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2a3543]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-xl font-semibold">Abhinav Gurram</h1>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-white/80 hover:text-white transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-white/80 hover:text-white transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-white/80 hover:text-white transition-colors">Skills</button>
              <button onClick={() => scrollToSection('education')} className="text-white/80 hover:text-white transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white/20">
                <ImageWithFallback 
                  src={profileImage} 
                  alt="Abhinav Gurram"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Hi, I'm Abhinav Gurram
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-300 mb-6">
                UI/UX Designer
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Creative, detail-oriented UI/UX Designer with 2.5+ years of experience crafting intuitive, human-centered digital products across web and mobile. Skilled in leading end-to-end design processes, driving user engagement, and collaborating closely with cross-functional teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  View My Work
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">UI/UX Designer - Internship</h3>
                    <p className="text-blue-300">Ant Forge, Hyderabad, India</p>
                  </div>
                  <p className="text-white/70 mt-2 md:mt-0">Apr 2025 – Present</p>
                </div>
                <ul className="text-white/80 space-y-2">
                  <li>• Led end-to-end design for key products</li>
                  <li>• Collaborated with product managers and developers to design features faster and smoother</li>
                  <li>• Conducted user research sessions, synthesized findings, and implemented insights into design iterations</li>
                  <li>• Built and maintained scalable design systems to ensure consistency across platforms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Web & UI/UX Designer</h3>
                    <p className="text-blue-300">Brickplan Infra Associates, Hyderabad, India</p>
                  </div>
                  <p className="text-white/70 mt-2 md:mt-0">May 2020 – May 2022</p>
                </div>
                <ul className="text-white/80 space-y-2">
                  <li>• Designed and launched website that improved user engagement</li>
                  <li>• Created wireframes, prototypes, and high-fidelity mockups for the website</li>
                  <li>• Part of the team from its foundation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">3D Animator</h3>
                    <p className="text-blue-300">Kirusa Inc., Bangalore, India</p>
                  </div>
                  <p className="text-white/70 mt-2 md:mt-0">Dec 2024 – Mar 2025</p>
                </div>
                <ul className="text-white/80 space-y-2">
                  <li>• Designed and animated interactive home workout exercises for the HappyFit AI app using Blender, Autodesk Maya</li>
                  <li>• Developed visually engaging 3D fitness content tailored for mobile experiences to support user onboarding and retention</li>
                  <li>• Collaborated with UX teams to ensure that animations aligned with the app's brand tone, user needs, and content goals</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Projects</h2>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white/10 rounded-lg p-1">
              {['All', 'Website', 'Mobile App'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category as 'All' | 'Website' | 'Mobile App')}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <Badge 
                        variant="secondary" 
                        className={`${
                          project.category === 'Website' 
                            ? 'bg-green-600/20 text-green-300' 
                            : 'bg-purple-600/20 text-purple-300'
                        }`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-blue-300 text-sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Design Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['User Interface Design', 'User Experience Research', 'Wireframing', 'Prototyping', 'Responsive Design', 'Design Thinking'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-600/20 text-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Design Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Photoshop', 'Illustrator', 'Blender', 'Autodesk Maya'].map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['English (Fluent)', 'Telugu (Native)', 'Hindi (Fluent)'].map((language) => (
                    <Badge key={language} variant="secondary" className="bg-green-600/20 text-green-300">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Education</h2>
          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Post Graduate Diploma in Advanced Computer Science</h3>
                    <p className="text-blue-300">University of Essex, Colchester, UK</p>
                  </div>
                  <p className="text-white/70 mt-2 md:mt-0">Oct 2022 – Oct 2023</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Bachelor of Technology in Computer Science and Engineering</h3>
                    <p className="text-blue-300">Vignan Institute of Technology and Science</p>
                  </div>
                  <p className="text-white/70 mt-2 md:mt-0">Aug 2015 – May 2020</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Advanced UI UX Course</h3>
                    <p className="text-blue-300">Careerpedia</p>
                  </div>
                  <p className="text-white/70 mt-2 md:mt-0">Feb 2024 – June 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, creative projects, or just having a chat about design.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href="mailto:abnv.gurram2905@gmail.com"
              className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors text-white"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a 
              href="tel:+918374364314"
              className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors text-white"
            >
              <Phone className="w-5 h-5" />
              Phone
            </a>
            <a 
              href="https://www.linkedin.com/in/abhinav-gurram2905/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors text-white"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/itsme_abnv/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/15 transition-colors text-white"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://www.behance.net/abhinav_gurram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white"
            >
              <ExternalLink className="w-5 h-5" />
              View My Behance Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Abhinav Gurram. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Action Button - Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-[#2a3543] border-white/20 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-lg">
                <ImageWithFallback 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Project Info</h4>
                  <p className="text-white/80">{selectedProject.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">Client</h4>
                    <p className="text-white/80">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">Category</h4>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        selectedProject.category === 'Website' 
                          ? 'bg-green-600/20 text-green-300' 
                          : 'bg-purple-600/20 text-purple-300'
                      }`}
                    >
                      {selectedProject.details}
                    </Badge>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a
                    href={selectedProject.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project on Figma
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}