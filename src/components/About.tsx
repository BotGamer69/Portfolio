import { GraduationCap, Briefcase, Trophy } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "BE Mechatronics Engineering",
      institution: "Air University Islamabad",
      period: "2023–Present"
    },
    {
      degree: "FSc. Pre-Engineering",
      institution: "FG Sir Syed College, Rawalpindi",
      period: "2021–2023"
    }
  ];

  const experience = [
    {
      title: "Cofounder & Director Hardware",
      company: "Embotics",
      type: "Startup"
    },
    {
      title: "Cofounder",
      company: "Print Theory",
      type: "3D Printing & Prototyping Business"
    },
    {
      title: "Freelancer",
      company: "Independent",
      type: "3 years experience"
    }
  ];

  const positions = [
    {
      title: "Deputy Head Hardware",
      organization: "Robotics & Automation Society",
      period: "2024–2025"
    },
    {
      title: "Deputy Head Graphics",
      organization: "Air Astronomical Society",
      period: "2024–2025"
    },
    {
      title: "Deputy Head Resource Mobilization",
      organization: "Youth Empowerment Club",
      period: "2024–2025"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am a passionate Mechatronics Engineer with expertise in SolidWorks design, 
              PCB development, and programming. I enjoy bringing ideas to life by creating 
              precise 3D models, functional electronic circuits, and innovative software solutions. 
              With a strong background in automation and problem-solving, I strive to design 
              efficient and practical solutions that bridge the gap between mechanics, electronics, and software.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="tech-card animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <p className="text-xs text-primary">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="tech-card animate-slide-up delay-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-medium text-foreground">{exp.title}</h4>
                    <p className="text-muted-foreground text-sm">{exp.company}</p>
                    <p className="text-xs text-primary">{exp.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Positions */}
            <div className="tech-card animate-slide-up delay-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Leadership</h3>
              </div>
              <div className="space-y-4">
                {positions.map((pos, index) => (
                  <div key={index} className="border-l-2 border-secondary/30 pl-4">
                    <h4 className="font-medium text-foreground text-sm">{pos.title}</h4>
                    <p className="text-muted-foreground text-xs">{pos.organization}</p>
                    <p className="text-xs text-secondary">{pos.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;