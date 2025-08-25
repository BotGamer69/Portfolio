import { Cpu, Cog, CircuitBoard, Cloud, Printer, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "3D CAD Design",
      description: "Precise mechanical models and assemblies ready for prototyping and manufacturing using SolidWorks.",
      features: ["Part Design", "Assembly Modeling", "Motion Simulation", "Technical Drawings"],
      color: "primary"
    },
    {
      icon: CircuitBoard,
      title: "PCB Design & Prototyping",
      description: "Complete PCB design services from schematic capture to manufacturing-ready layouts.",
      features: ["Schematic Design", "PCB Layout", "Component Selection", "Testing & Validation"],
      color: "secondary"
    },
    {
      icon: Cpu,
      title: "Embedded Systems Development",
      description: "Custom microcontroller programming and integration for various applications.",
      features: ["Arduino Programming", "STM32 Development", "ESP32 IoT Solutions", "Sensor Integration"],
      color: "accent"
    },
    {
      icon: Cloud,
      title: "IoT Automation Solutions",
      description: "Smart systems that integrate sensors, actuators, and cloud platforms for automation.",
      features: ["Home Automation", "Industrial IoT", "Remote Monitoring", "Data Analytics"],
      color: "primary"
    },
    {
      icon: Printer,
      title: "Rapid Prototyping",
      description: "Fast iteration from concept to physical prototype using 3D printing and CNC machining.",
      features: ["3D Printing", "CNC Machining", "Functional Testing", "Design Iteration"],
      color: "secondary"
    },
    {
      icon: Wrench,
      title: "System Integration",
      description: "Complete mechatronic system integration combining mechanical, electrical, and software components.",
      features: ["System Design", "Component Integration", "Testing & Validation", "Documentation"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'bg-primary/20 text-primary border-primary/30',
          hover: 'hover:border-primary/50 hover:shadow-primary/20'
        };
      case 'secondary':
        return {
          icon: 'bg-secondary/20 text-secondary border-secondary/30',
          hover: 'hover:border-secondary/50 hover:shadow-secondary/20'
        };
      case 'accent':
        return {
          icon: 'bg-accent/20 text-accent border-accent/30',
          hover: 'hover:border-accent/50 hover:shadow-accent/20'
        };
      default:
        return {
          icon: 'bg-primary/20 text-primary border-primary/30',
          hover: 'hover:border-primary/50 hover:shadow-primary/20'
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive engineering solutions from concept to implementation, 
              bridging the gap between mechanical, electrical, and software systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              
              return (
                <div
                  key={index}
                  className={`tech-card group cursor-pointer transform hover:scale-105 ${colorClasses.hover} animate-slide-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 ${colorClasses.icon} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${service.color === 'primary' ? 'bg-primary' : service.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`}></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-lg bg-tech-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 bg-tech-gradient rounded-2xl text-primary-foreground animate-scale-in">
              <h3 className="text-2xl font-bold">Ready to bring your ideas to life?</h3>
              <p className="text-lg opacity-90">Let's discuss your project requirements and create something amazing together.</p>
              <a
                href="#contact"
                className="px-8 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;