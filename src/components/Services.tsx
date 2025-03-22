
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Wrench, BarChart4, Clock, Calendar, Settings, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { getStaggeredChildren } from "@/lib/animations";

const services = [
  {
    title: "Multi-Market Platform",
    description: "Our platform operates across multiple markets, connecting customers with skilled mechanics anywhere they're needed.",
    icon: Globe
  },
  {
    title: "Gig-Based Repairs",
    description: "Freelance mechanics can join our platform, set their own schedule, and provide on-demand repair services in their local area.",
    icon: Wrench
  },
  {
    title: "Routine Maintenance",
    description: "Regular services including oil changes, filter replacements, and fluid checks to keep your vehicle running smoothly.",
    icon: Settings
  },
  {
    title: "Performance Tuning",
    description: "Optimize your vehicle's performance with expert tuning and upgrades tailored to your specific needs.",
    icon: BarChart4
  },
  {
    title: "Emergency Services",
    description: "Fast response to breakdowns and urgent repairs to get you back on the road as quickly as possible.",
    icon: Clock
  },
  {
    title: "Scheduled Maintenance",
    description: "Book regular maintenance in advance to ensure your vehicle stays in optimal condition year-round.",
    icon: Calendar
  }
];

const Services = () => {
  const staggeredItems = getStaggeredChildren(services.length);

  return (
    <section id="services" className="py-20 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            The <span className="text-primary">Gig-Economy</span> Revolution in Vehicle Maintenance
          </h2>
          <p className="text-muted-foreground animate-fade-up delay-150">
            Our multi-market platform connects customers with freelance mechanics who provide 
            on-demand mobile repair services wherever and whenever you need them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className={cn(
                  "border border-border/60 transition-all hover:shadow-md animate-fade-up",
                  "hover:border-primary/20 hover:-translate-y-1 group"
                )}
                {...staggeredItems[index]}
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;
