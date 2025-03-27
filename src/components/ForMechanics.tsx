
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SignupDialog } from "./services/SignupDialog";
import { Wrench, Hammer, CreditCard, CalendarCheck } from "lucide-react";

const ForMechanics = () => {
  return (
    <section id="for-mechanics" className="py-20 bg-secondary/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">For Professional Mechanics</h2>
          <p className="text-muted-foreground mb-6">
            ViaFix empowers independent mechanics to grow their business. Join our platform and take control of your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <Wrench className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Set Your Own Prices</h3>
            <p className="text-muted-foreground">
              Determine your pricing based on your experience and market demand. Earn what you're worth.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <Hammer className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Choose Your Services</h3>
            <p className="text-muted-foreground">
              Offer only the services you excel at. Specialize in your areas of expertise.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <CreditCard className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Handle Payments</h3>
            <p className="text-muted-foreground">
              Process your own payments directly. No middleman fees cutting into your earnings.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <CalendarCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Create Job Offers</h3>
            <p className="text-muted-foreground">
              Post your availability and services. Build your client base on your own terms.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 mb-12">
          <h3 className="font-semibold text-xl mb-4">Requirements & Expectations</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">✓</span>
              <span>ASE certifications preferred with at least 3 years of verifiable work experience</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">✓</span>
              <span>Professional conduct at all times when interacting with customers</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">✓</span>
              <span>Proper tooling required for all advertised services</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">✓</span>
              <span>Take on only jobs you can confidently handle to maintain quality service</span>
            </li>
          </ul>
          <p className="text-muted-foreground mb-6">
            We provide a platform for you to remain independent while increasing your clientele on the road. 
            Take control of your career and build your business with ViaFix.
          </p>
          <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">Mechanic Pre-Registration</Button>
              </DialogTrigger>
              <SignupDialog 
                services={[{title: "Mechanic Registration"}]} 
                selectedService={"Mechanic Registration"} 
                setSelectedService={() => {}}
              />
            </Dialog>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ForMechanics;
