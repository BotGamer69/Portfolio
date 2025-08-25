import React from "react";
import { Cpu, Cog, CircuitBoard, Cloud, Settings } from "lucide-react";
import printerImage from "@/assets/3d-printer.png"; // <- change to relative path if alias "@" isn't set

// ---- Types ----
type Color = "primary" | "secondary" | "accent";

type LucideSkill = {
  kind: "icon";
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type ImageSkill = {
  kind: "image";
  imgSrc: string;
  imgAlt?: string;
};

type SkillCategory = (LucideSkill | ImageSkill) & {
  category: string;
  color: Color;
  skills: string[];
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "3D CAD & Design",
      kind: "icon",
      Icon: Cog,
      color: "primary",
      skills: ["SolidWorks", "3D Modeling", "Assembly Design", "Motion Simulation"],
    },
    {
      category: "PCB & Electronics",
      kind: "icon",
      Icon: CircuitBoard,
      color: "secondary",
      skills: ["EasyEDA", "Proteus", "Circuit Design", "PCB Layout", "Debugging"],
    },
    {
      category: "Embedded Systems",
      kind: "icon",
      Icon: Cpu,
      color: "accent",
      skills: ["Arduino", "STM32", "ESP32", "C++", "Python", "Microcontrollers"],
    },
    {
      category: "Automation & Control",
      kind: "icon",
      Icon: Settings,
      color: "primary",
      skills: ["Control Systems", "Robotics", "Sensor Integration", "Motor Drivers"],
    },
    {
      category: "IoT Development",
      kind: "icon",
      Icon: Cloud,
      color: "secondary",
      skills: ["AWS IoT", "Node-RED", "Blynk", "IoT Platforms", "Smart Systems"],
    },
    {
      // ✅ Uses your custom 3D printer PNG
      category: "Manufacturing",
      kind: "image",
      imgSrc: printerImage,
      imgAlt: "3D Printer",
      color: "accent",
      skills: ["3D Printing", "CNC", "Rapid Prototyping", "Industrial Automation"],
    },
  ];

  const getColorClasses = (color: Color) => {
    switch (color) {
      case "primary":
        return "bg-primary/20 text-primary border-primary/30";
      case "secondary":
        return "bg-secondary/20 text-secondary border-secondary/30";
      case "accent":
        return "bg-accent/20 text-accent border-accent/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning mechanical design, electronics, programming, and automation technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="tech-card group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center border-2 ${getColorClasses(
                      category.color
                    )}`}
                  >
                    {category.kind === "image" ? (
                      <img
                        src={category.imgSrc}
                        alt={category.imgAlt ?? category.category}
                        className="w-9 h-9 object-contain"
                      />
                    ) : (
                      <category.Icon className="w-6 h-6" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-muted/50 rounded-lg text-sm text-foreground border border-border hover:border-primary/50 transition-all duration-300 hover:bg-muted/70"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Banner */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              {[
                "Power Electronics",
                "PLC Programming",
                "MATLAB/Simulink",
                "CAM Software",
                "Quality Control",
                "Project Management",
              ].map((skill, idx) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-tech-gradient text-primary-foreground rounded-full text-sm font-medium shadow-tech-glow animate-scale-in"
                  style={{ animationDelay: `${idx * 150 + 500}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
