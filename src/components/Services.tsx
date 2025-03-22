
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Wrench, BarChart4, Clock, Calendar, Settings, Globe, Car, Truck, Droplets, Battery, Wrench as WrenchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { getStaggeredChildren } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

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
    icon: WrenchIcon
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
  const [userType, setUserType] = useState<"customer" | "provider">("customer");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService) {
      toast.error("Please select a service");
      return;
    }
    
    if (userType === "customer") {
      toast.success(`You've signed up to receive ${selectedService} services for free!`);
    } else {
      toast.success(`You've signed up to offer ${selectedService} services! Please complete the payment process to activate your account.`);
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <Container>
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
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Sign Up</DialogTitle>
                  <DialogDescription>
                    Select how you want to join our platform
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSignup} className="grid gap-6 py-4">
                  <RadioGroup 
                    defaultValue="customer"
                    onValueChange={(value) => setUserType(value as "customer" | "provider")}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="customer" id="customer" className="peer sr-only" />
                      <Label
                        htmlFor="customer"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mb-3 h-6 w-6"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                        </svg>
                        Find a Service
                        <span className="mt-1 text-xs text-green-600 font-medium">FREE</span>
                      </Label>
                    </div>
                    
                    <div>
                      <RadioGroupItem value="provider" id="provider" className="peer sr-only" />
                      <Label
                        htmlFor="provider"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mb-3 h-6 w-6"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        Offer a Service
                        <span className="mt-1 text-xs text-blue-600 font-medium">SUBSCRIPTION</span>
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-medium">
                      Select a service {userType === "customer" ? "you need" : "you can provide"}:
                    </Label>
                    <select 
                      id="service" 
                      className="w-full p-2 border rounded-md bg-background"
                      onChange={(e) => setSelectedService(e.target.value)}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {userType === "provider" && (
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-md text-sm">
                      <p className="font-medium text-blue-700 dark:text-blue-300">Vendor Subscription Required</p>
                      <p className="mt-1 text-blue-600 dark:text-blue-400">To offer services on our platform, you'll need to select a subscription plan after signup.</p>
                    </div>
                  )}
                  
                  <DialogFooter>
                    <Button type="submit" className="w-full">
                      {userType === "customer" 
                        ? "Sign Up For Free" 
                        : "Continue to Payment"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Learn More</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join Our Platform</DialogTitle>
                  <DialogDescription>
                    AutoProNow connects skilled mechanics with customers who need auto services.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-md">
                    <h3 className="font-medium text-green-700 dark:text-green-300">For Customers</h3>
                    <p className="mt-1 text-green-600 dark:text-green-400">Completely free to use! Find skilled mechanics near you for on-demand services with no subscription fees.</p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-md">
                    <h3 className="font-medium text-blue-700 dark:text-blue-300">For Service Providers</h3>
                    <p className="mt-1 text-blue-600 dark:text-blue-400">Offer your skills and expertise to customers in your area with a subscription plan that gives you access to our marketplace.</p>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => toast.info("More information has been sent to your email")}>
                    Request Information
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
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
                  <CardDescription className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </CardDescription>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full">
                        Sign Up for {service.title}
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Sign Up for {service.title}</DialogTitle>
                        <DialogDescription>
                          Choose how you want to participate
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-4 py-4">
                        <Button
                          onClick={() => toast.success(`You've signed up to receive ${service.title} services for free!`)}
                          className="flex flex-col items-center justify-center gap-2 p-4 h-auto"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                          </svg>
                          Request This Service
                          <span className="text-xs font-medium text-green-600">FREE</span>
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => toast.success(`You've signed up to offer ${service.title} services! Please complete the payment process to activate your account.`)}
                          className="flex flex-col items-center justify-center gap-2 p-4 h-auto"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          Offer This Service
                          <span className="text-xs font-medium text-blue-600">SUBSCRIPTION</span>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
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
