
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Vehicle Repairs, Simplified
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-down">
            Expert Mechanics, <br className="hidden sm:block" />
            <span className="text-primary">At Your Doorstep</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up delay-150">
            AutoProNow connects you with skilled mobile mechanics who come to you.
            No more waiting at repair shops or dealing with inconvenient drop-offs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button size="lg" className="w-full sm:w-auto">
              Book a Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              How It Works
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 max-w-3xl mx-auto text-center animate-fade-up delay-500">
            {[
              { number: "5,000+", label: "Jobs Completed" },
              { number: "97%", label: "Satisfaction Rate" },
              { number: "300+", label: "Certified Mechanics" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.number}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;
