
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PlanOption {
  id: string;
  name: string;
  price: number;
  duration: string;
  savings?: string;
  totalPrice?: number;
}

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const plans: PlanOption[] = [
    {
      id: "monthly",
      name: "Monthly",
      price: 35.00,
      duration: "1 month",
      totalPrice: 35.00
    },
    {
      id: "quarterly",
      name: "Quarterly",
      price: 31.50,
      duration: "3 months",
      savings: "Save 10%",
      totalPrice: 94.50
    },
    {
      id: "biannual",
      name: "Bi-Annual",
      price: 29.75,
      duration: "6 months",
      savings: "Save 15%",
      totalPrice: 178.50
    },
    {
      id: "annual",
      name: "Annual",
      price: 28.00,
      duration: "12 months",
      savings: "Save 20%",
      totalPrice: 336.00
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

        <div className="mb-4 text-center">
          <p className="text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 py-2 px-4 rounded-md inline-block">
            All plans are billed upfront for the full duration with discounts applied
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative overflow-hidden transition-all border-border ${
                selectedPlan === plan.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <div className="p-6">
                <div className="text-xl font-bold">
                  {plan.name}
                </div>
                
                <div className="mt-2">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.duration}</span>
                </div>
                
                {plan.savings && (
                  <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded mt-2">
                    {plan.savings}
                  </span>
                )}

                {plan.totalPrice && (
                  <div className="mt-3 text-sm font-medium">
                    Total: ${plan.totalPrice.toFixed(2)} upfront
                  </div>
                )}
                
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
