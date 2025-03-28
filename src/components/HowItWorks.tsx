
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { getStaggeredChildren } from "@/lib/animations";
import { Wrench } from "lucide-react"; // Replace Tools with Wrench which is available

const steps = [
  {
    number: "01",
    title: "Book Your Service",
    description: "Select any service provider in your area, coordinate a convenient time, and have any repair or maintenance done regardless of the service market you're seeking assistance for.",
  },
  {
    number: "02",
    title: "Gig Mechanic Acceptance",
    description: "A qualified freelance mechanic in your area will accept your job request and provide an estimated arrival time.",
  },
  {
    number: "03",
    title: "Service at Your Location",
    description: "The gig-based mechanic arrives at your location with all necessary tools and parts to complete the service.",
  },
  {
    number: "04",
    title: "Pay After Satisfaction",
    description: "Once the work is completed to your satisfaction, pay the freelance mechanic directly. We keep our hands out of anyone's pockets, eliminating middlemen and maximizing value for both customers and service providers.",
  }
];

const HowItWorks = () => {
  const staggeredItems = getStaggeredChildren(steps.length);

  return (
    <section id="how-it-works" className="py-20 bg-secondary relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            How <span className="text-primary">ViaFix</span> Works
          </h2>
          <p className="text-muted-foreground animate-fade-up delay-150">
            Our multi-market, gig-based platform makes vehicle maintenance easier than ever.
            Here's how we connect you with skilled freelance mechanics.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border md:translate-x-0 hidden md:block" />
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col md:flex-row items-center md:items-start gap-8 relative",
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse",
                  "animate-fade-up"
                )}
                {...staggeredItems[index]}
              >
                {/* Number dot */}
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-sm z-10 md:mx-8">
                  {step.number}
                </div>
                
                <div className={cn(
                  "glass-effect rounded-xl p-6 md:max-w-md w-full",
                  "md:w-[calc(50%-60px)]"
                )}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
