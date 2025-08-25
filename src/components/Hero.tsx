import { ArrowRight, Download } from 'lucide-react';
import profileImage from '@/assets/profile-picture.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Muhammad <span className="text-gradient">Faizan Tahir</span>
              </h1>
              <p className="text-xl md:text-1.9xl text-muted-foreground">
                Mechatronics Engineer | Co-Founder Embotics (PVT.) LTD. | Innovator in CAD, PCB, and Embedded Systems
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Passionate about bringing ideas to life through precise 3D modeling, 
              functional electronic circuits, and innovative software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* View Work Button */}
              <a
                href="#portfolio"
                className="tech-button group inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download CV Button */}
              <a
                href="/Faizan_Resume.pdf"   // File should be placed inside public/Faizan_Resume.pdf
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-tech-gradient rounded-full blur-3xl opacity-30 animate-glow-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-tech-glow bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src={profileImage}
                  alt="Muhammad Faizan Tahir"
                  className="w-full h-full object-cover object-top scale-100"
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/30">
                <span className="text-lg">🔧</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
