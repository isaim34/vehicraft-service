
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/5 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-primary font-bold text-2xl mb-4">Mobex</h3>
            <p className="text-muted-foreground mb-6">
              The leading platform connecting vehicle owners with skilled mobile mechanics for on-demand repair and maintenance services at your location.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Button key={index} variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Mobile Repair Services</h4>
            <ul className="space-y-3">
              {[
                "Mobile Diagnostics & Repairs", 
                "On-Site Oil Changes", 
                "Mobile Brake Service", 
                "At-Home Battery Replacement", 
                "Emergency Roadside Repair"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#mobile-repair-services" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">For Mechanics & Customers</h4>
            <ul className="space-y-3">
              {[
                "Mechanic Registration", 
                "Customer Reviews", 
                "Freelance Opportunities", 
                "Service Area Lookup", 
                "FAQs"
              ].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Your Mobile Mechanic</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Repair Street, Auto City, AC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@mobex.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@mobex.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-border/60" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mobex - Mobile Mechanic Services. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Service Areas
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
