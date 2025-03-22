
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";
import { getStaggeredChildren } from "@/lib/animations";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Honda Civic Owner",
    content: "Having a mechanic come to my office parking lot during work hours saved me so much time. The service was professional and the price was reasonable!",
    stars: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Toyota Tacoma Owner",
    content: "I was skeptical at first, but the mechanic who came to my home was more knowledgeable than the ones I've dealt with at dealerships. Excellent service!",
    stars: 5
  },
  {
    name: "Jennifer Lee",
    role: "Audi A4 Owner",
    content: "The convenience of having my car serviced in my driveway is game-changing. The mechanic was prompt, professional, and thorough. Highly recommend!",
    stars: 5
  },
  {
    name: "David Thompson",
    role: "Ford F-150 Owner",
    content: "As someone who uses their truck for work, I can't afford downtime. The mobile service meant I could keep working while my truck was being serviced.",
    stars: 4
  },
  {
    name: "Emma Wilson",
    role: "Subaru Outback Owner",
    content: "The diagnostic service saved me from an expensive repair at the dealership. The mechanic identified the exact issue and fixed it on the spot.",
    stars: 5
  },
  {
    name: "Robert Chen",
    role: "BMW 3 Series Owner",
    content: "Premium service for my premium vehicle. The mechanic was familiar with all the specifics of my car model and provided excellent service.",
    stars: 5
  }
];

const Testimonials = () => {
  const staggeredItems = getStaggeredChildren(testimonials.length);

  return (
    <section id="testimonials" className="py-20 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-muted-foreground animate-fade-up delay-150">
            Don't just take our word for it. Here's what vehicle owners across the country are saying about AutoProNow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={cn(
                "bg-card border border-border/60 h-full",
                "hover:shadow-md transition-all animate-fade-up"
              )}
              {...staggeredItems[index]}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={cn(
                        i < testimonial.stars 
                          ? "text-amber-400 fill-amber-400" 
                          : "text-gray-300"
                      )}
                    />
                  ))}
                </div>
                
                <div className="relative mb-6 grow">
                  <Quote size={28} className="absolute -top-2 -left-1 text-primary/20" />
                  <p className="relative z-10 text-foreground/90 italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-border/60">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
