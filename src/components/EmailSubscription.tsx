
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Container } from "@/components/ui/container";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

const EmailSubscription = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates on our mobile app progress.",
      });
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="subscribe" className="py-16 bg-primary/5 relative">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Stay Updated on Our <span className="text-primary">Progress</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 animate-fade-up delay-150">
            Join our email list to receive exclusive updates about our mobile app development, 
            early access opportunities, and launch notifications.
          </p>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6 animate-fade-in">
              <CheckCircle className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold">Thanks for subscribing!</h3>
              <p className="text-muted-foreground mt-2">We'll keep you posted on our progress.</p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setIsSubmitted(false)}
              >
                Subscribe another email
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto animate-fade-up delay-300"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1 w-full">
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          className="h-12" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          )}
          
          <div className="mt-8 text-sm text-muted-foreground animate-fade-up delay-500">
            <p>We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default EmailSubscription;
