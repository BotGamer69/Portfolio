import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  });

  // Reference for EmailJS form
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      "service_whcxv7e",   // ✅ your EmailJS Service ID
      "template_859lwch",  // ✅ your EmailJS Template ID
      formRef.current,
      "OP52cKKMzoMh5Vdnf"  // ✅ your EmailJS Public Key
    )
    .then(() => {
      toast({
        title: "Message Sent! ✅",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
    })
    .catch((error) => {
      toast({
        title: "Error ❌",
        description: "Failed to send message. Please try again later.",
      });
      console.error("EmailJS error:", error);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhammadfaizantahir31@gmail.com",
      href: "mailto:muhammadfaizantahir31@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 339 0382387",
      href: "tel:+923390382387",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rawalpindi, Pakistan",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/BotGamer69",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mfaizantahir",
      color: "secondary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/oyeee_faizi",
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground';
      case 'secondary':
        return 'bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground';
      case 'accent':
        return 'bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground';
      default:
        return 'bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground';
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for engineering consultation, project collaboration, 
                  or custom solutions, I'm here to help turn your vision into reality.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${getColorClasses(info.color)}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${getColorClasses(social.color)}`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up delay-200">
              <form ref={formRef} onSubmit={handleSubmit} className="tech-card space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="reply_to" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="reply_to"
                      name="reply_to"
                      value={formData.reply_to}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full tech-button group justify-center"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
