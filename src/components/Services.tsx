
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Wrench, BarChart4, Clock, Calendar, Settings, Globe, Car, Truck, Droplets, Battery, Tool, Wrench as WrenchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { getStaggeredChildren } from "@/lib/animations";

const services = [
  {
    title: "Automotive Repair",
    description: "Professional mechanics provide on-demand repair services for cars, SUVs, and light trucks at your location.",
    icon: Car
  },
  {
    title: "Diesel Engine Service",
    description: "Specialized technicians for heavy-duty diesel engines in trucks, generators, and agricultural equipment.",
    icon: Truck
  },
  {
    title: "Mobile Detailing",
    description: "Premium car washing, waxing, and interior detailing services that come to your home or office.",
    icon: Droplets
  },
  {
    title: "Battery Replacement",
    description: "Emergency and scheduled battery testing, jump-starts, and replacement services wherever you're stranded.",
    icon: Battery
  },
  {
    title: "Tire Services",
    description: "Mobile tire rotation, balancing, repair, and replacement without the need to visit a shop.",
    icon: Tool
  },
  {
    title: "Scheduled Maintenance",
    description: "Book regular maintenance in advance with qualified freelance mechanics for optimal vehicle performance.",
    icon: Calendar
  },
  {
    title: "Electronics Diagnostics",
    description: "Expert diagnostics and repair of vehicle computer systems, sensors, and electronic components.",
    icon: Settings
  },
  {
    title: "Emergency Roadside Help",
    description: "Fast response to breakdowns and urgent repairs from nearby gig mechanics to get you back on the road quickly.",
    icon: Clock
  },
  {
    title: "Multi-Market Platform",
    description: "Our platform connects customers with skilled freelance mechanics across multiple regions and service categories.",
    icon: Globe
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
            specialized on-demand mobile repair services wherever and whenever you need them.
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
