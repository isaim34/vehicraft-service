
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Wrench, BarChart4, Clock, ShieldCheck, Calendar, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { getStaggeredChildren } from "@/lib/animations";

const services = [
  {
    title: "Diagnostics & Repairs",
    description: "Professional diagnosis and repair of mechanical and electrical issues, right where your vehicle is parked.",
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
    title: "Warranty Work",
    description: "Factory-authorized service maintaining your vehicle's warranty with genuine parts and qualified technicians.",
    icon: ShieldCheck
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
            Professional Auto Services, <span className="text-primary">Delivered to You</span>
          </h2>
          <p className="text-muted-foreground animate-fade-up delay-150">
            Our network of certified mobile mechanics provides a comprehensive range of services,
            bringing professional auto care directly to your location.
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
