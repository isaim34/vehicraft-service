
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Check, InfoIcon } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PlanOption {
  id: string;
  name: string;
  price: number;
  duration: string;
  savings?: string;
  features: string[];
  popular?: boolean;
}

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const plans: PlanOption[] = [
    {
      id: "monthly",
      name: "Monthly",
      price: 35.00,
      duration: "1 month",
      features: [
        "Basic diagnostic checks",
        "Priority booking",
        "24/7 roadside support",
        "Monthly maintenance reminders"
      ]
    },
    {
      id: "quarterly",
      name: "Quarterly",
      price: 31.50,
      duration: "3 months",
      savings: "Save 10%",
      features: [
        "All monthly plan features",
        "Free oil changes",
        "Tire rotation service",
        "Quarterly vehicle inspection"
      ]
    },
    {
      id: "biannual",
      name: "Bi-Annual",
      price: 29.75,
      duration: "6 months",
      savings: "Save 15%",
      popular: true,
      features: [
        "All quarterly plan features",
        "Free filter replacements",
        "Brake system check",
        "Semi-annual full vehicle inspection",
        "Exclusive member discounts"
      ]
    },
    {
      id: "annual",
      name: "Annual",
      price: 28.00,
      duration: "12 months",
      savings: "Save 20%",
      features: [
        "All bi-annual plan features",
        "Annual deep maintenance service",
        "Battery replacement discount",
        "Free fluid top-ups all year",
        "Priority emergency service",
        "Dedicated service advisor"
      ]
    }
  ];

  return (
    <section id="subscription-plans" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Choose Your Subscription
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the plan that fits your needs. Subscribe for longer periods and save more.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-md text-sm inline-flex items-center">
              <InfoIcon className="h-4 w-4 mr-2" />
              Subscriptions coming soon! Pricing displayed for transparency.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative overflow-hidden transition-all ${
                plan.popular ? 'shadow-md' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-bl-md">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="mb-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={plan.id} id={plan.id} />
                    <Label htmlFor={plan.id} className="text-xl font-bold">
                      {plan.name}
                    </Label>
                  </div>
                </RadioGroup>
                
                <div className="mt-2">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.duration}</span>
                </div>
                
                {plan.savings && (
                  <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded mt-2">
                    {plan.savings}
                  </span>
                )}
                
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="mt-8">
                        <Button 
                          className="w-full opacity-60 cursor-not-allowed"
                          variant="outline"
                          disabled
                        >
                          Coming Soon
                        </Button>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Subscriptions will be available soon!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SubscriptionPlans;
