
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { LearnMoreDialog } from "./LearnMoreDialog";
import { SignupDialog } from "./SignupDialog";

interface ServiceHeaderProps {
  services: Array<{ title: string }>;
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
}

export const ServiceHeader = ({ 
  services, 
  selectedService, 
  setSelectedService 
}: ServiceHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
        The <span className="text-primary">Gig-Economy</span> Revolution in Vehicle Maintenance
      </h2>
      <p className="text-muted-foreground animate-fade-up delay-150 mb-6">
        Our multi-market platform connects customers with freelance mechanics who provide 
        specialized on-demand mobile repair services wherever and whenever you need them.
      </p>
      <p className="text-sm font-medium text-primary animate-fade-up delay-200 mb-6">
        Free for customers, paid subscription for service providers
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Sign Up for Services</Button>
          </DialogTrigger>
          <SignupDialog 
            services={services} 
            selectedService={selectedService} 
            setSelectedService={setSelectedService} 
          />
        </Dialog>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Learn More</Button>
          </DialogTrigger>
          <LearnMoreDialog />
        </Dialog>
      </div>
    </div>
  );
};
