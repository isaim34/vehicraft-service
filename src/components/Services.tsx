
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Dialog } from "@/components/ui/dialog";
import { getStaggeredChildren } from "@/lib/animations";
import { ServiceCard } from "./services/ServiceCard";
import { ServiceHeader } from "./services/ServiceHeader";
import { ServiceQuickSignupDialog } from "./services/ServiceQuickSignupDialog";
import { servicesData } from "./services/servicesData";

const Services = () => {
  const staggeredItems = getStaggeredChildren(servicesData.length);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [quickSignupService, setQuickSignupService] = useState<string | null>(null);

  const handleOpenSignupDialog = (service: string) => {
    setQuickSignupService(service);
  };

  return (
    <section id="services" className="py-20 relative">
      <Container>
        <ServiceHeader 
          services={servicesData} 
          selectedService={selectedService} 
          setSelectedService={setSelectedService} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Dialog key={index}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                style={staggeredItems[index].style || {}}
                onOpenSignupDialog={handleOpenSignupDialog}
              />
              {quickSignupService === service.title && (
                <ServiceQuickSignupDialog service={service.title} />
              )}
            </Dialog>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
