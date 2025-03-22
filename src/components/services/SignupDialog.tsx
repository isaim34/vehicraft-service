
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface SignupDialogProps {
  services: Array<{ title: string }>;
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
}

export const SignupDialog = ({ 
  services, 
  selectedService, 
  setSelectedService 
}: SignupDialogProps) => {
  const [userType, setUserType] = useState<"customer" | "provider">("customer");

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
            value={selectedService || ""}
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
  );
};
