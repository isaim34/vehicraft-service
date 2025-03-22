
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Dialog } from "@/components/ui/dialog";
import { ServiceHeader } from "./services/ServiceHeader";
import { servicesData } from "./services/servicesData";
import { Shield, Clock, DollarSign, Map, Smartphone, Users, MessageCircle } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const benefits = [
    {
      icon: Shield,
      title: "Verified Providers",
      description: "All mechanics undergo rigorous verification and skill assessment, unlike less selective platforms."
    },
    {
      icon: Clock,
      title: "On-Demand Service",
      description: "Get repairs whenever and wherever you need them, eliminating the wait times at traditional shops."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clearly displayed rates with no hidden fees, unlike dealerships with unexpected charges."
    },
    {
      icon: Map,
      title: "Location Flexibility",
      description: "Service at your home, office, or roadside - no need to drive to a repair facility or dealership."
    },
    {
      icon: Smartphone,
      title: "Easy Mobile Booking",
      description: "Book and track services from your phone, compared to traditional phone-call scheduling."
    },
    {
      icon: Users,
      title: "Freelance Model",
      description: "Support independent mechanics who earn more than at dealerships, creating a sustainable ecosystem."
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Mechanics and customers can communicate directly in real-time, eliminating middlemen and miscommunication."
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <Container>
        <ServiceHeader 
          services={servicesData} 
          selectedService={selectedService} 
          setSelectedService={setSelectedService} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-start p-6 rounded-lg border border-border/60 bg-background/50 
                  hover:border-primary/20 hover:bg-background/80 transition-all hover:shadow-md animate-fade-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-muted-foreground animate-fade-up">
            Unlike traditional repair shops or basic listing platforms, AutoProNow's gig-economy approach 
            delivers unmatched convenience and quality while supporting independent mechanics.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Services;
