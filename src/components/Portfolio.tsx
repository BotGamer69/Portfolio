import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Supercharged V12 Engine",
      category: "3D CAD Design",
      description: "Complete CAD assembly and motion simulation of a supercharged V12 engine using SolidWorks. Features detailed component modeling and realistic motion studies.",
      image: "🏎️",
      technologies: ["SolidWorks", "Motion Simulation", "Assembly Design", "Technical Drawings"],
      color: "primary"
    },
    {
      title: "IoT-Based Home Automation",
      category: "IoT & Electronics",
      description: "Smart home system with remote appliance control featuring custom PCB design, ESP32 microcontroller, and cloud integration for seamless automation.",
      image: "🏠",
      technologies: ["ESP32", "PCB Design", "IoT", "Mobile App", "Cloud Integration"],
      color: "secondary"
    },
    {
      title: "3D Printed Humanoid Robot",
      category: "Robotics & Manufacturing",
      description: "Fully functional humanoid robot designed and fabricated using 3D printing technology, featuring advanced control systems and servo integration.",
      image: "🤖",
      technologies: ["3D Printing", "Arduino", "Servo Control", "CAD Design", "Programming"],
      color: "accent"
    },
    {
      title: "Digital Logic Design Projects",
      category: "Digital Systems",
      description: "Hardware-based digital systems including Tic-Tac-Toe game and 12/24 Hour Clock implementations using discrete logic components.",
      image: "⚡",
      technologies: ["Digital Logic", "VHDL", "Hardware Design", "Circuit Design"],
      color: "primary"
    },
    {
      title: "Automated PCB Testing System",
      category: "Test & Automation",
      description: "Automated testing system for PCB quality assurance with custom fixtures, sensor integration, and data logging capabilities.",
      image: "🔧",
      technologies: ["Test Automation", "Sensors", "Data Logging", "Quality Control"],
      color: "secondary"
    },
    {
      title: "Smart Agricultural Monitoring",
      category: "IoT & Sensors",
      description: "IoT-based agricultural monitoring system with soil sensors, weather station, and automated irrigation control for optimal crop management.",
      image: "🌱",
      technologies: ["Sensor Networks", "IoT", "Data Analytics", "Automation", "Mobile Dashboard"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/30 hover:border-primary/60 hover:shadow-primary/20';
      case 'secondary':
        return 'border-secondary/30 hover:border-secondary/60 hover:shadow-secondary/20';
      case 'accent':
        return 'border-accent/30 hover:border-accent/60 hover:shadow-accent/20';
      default:
        return 'border-primary/30 hover:border-primary/60 hover:shadow-primary/20';
    }
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative engineering solutions spanning mechanical design, 
              electronics, automation, and embedded systems development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-card border-2 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${getColorClasses(project.color)} animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-muted/30 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-3 bg-primary rounded-full text-primary-foreground hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-secondary rounded-full text-secondary-foreground hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{project.category}</div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-tech-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="tech-button group inline-flex items-center justify-center gap-2"
            >
              View All Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;