
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface SignupDialogProps {
  services: Array<{ title: string }>;
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
}

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  resume: z.any().optional(),
  experienceYears: z.string().min(1, "Years of experience is required"),
  certifications: z.string().optional(),
  userType: z.enum(["customer", "provider"]),
});

export const SignupDialog = ({ 
  services, 
  selectedService, 
  setSelectedService 
}: SignupDialogProps) => {
  const [userType, setUserType] = useState<"customer" | "provider">("provider");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experienceYears: "",
      certifications: "",
      userType: "provider",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
    if (file) {
      toast.success(`Resume uploaded: ${file.name}`);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ ...values, resumeFile });
    
    toast.success("Pre-registration submitted successfully! We'll contact you when the app launches.");
  };

  // Special handling for mechanic registration
  const isMechanicRegistration = selectedService === "Mechanic Registration";

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>{isMechanicRegistration ? "Mechanic Pre-Registration" : "Sign Up"}</DialogTitle>
        <DialogDescription>
          {isMechanicRegistration 
            ? "Submit your information to be notified when mechanic registration opens."
            : "Select how you want to join our platform"}
        </DialogDescription>
      </DialogHeader>
      
      {isMechanicRegistration ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="experienceYears"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="certifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Certifications (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="ASE, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium">Resume/CV (Optional)</Label>
              <div className="border-2 border-dashed rounded-md px-6 py-8 text-center">
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Label 
                  htmlFor="resume-upload" 
                  className="cursor-pointer flex flex-col items-center gap-1 text-muted-foreground"
                >
                  <Upload className="h-6 w-6 mb-2" />
                  <span className="font-medium">Click to upload</span>
                  <span className="text-xs">PDF, DOC, or DOCX (Max 5MB)</span>
                </Label>
                {resumeFile && (
                  <div className="mt-4 text-sm flex items-center gap-2 justify-center text-primary">
                    <Paperclip className="h-4 w-4" />
                    <span>{resumeFile.name}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-md text-sm mt-4">
              <p className="font-medium text-blue-700 dark:text-blue-300">Pre-Registration Information</p>
              <p className="mt-1 text-blue-600 dark:text-blue-400">We'll notify you when the ViaFix platform launches for mechanics. You'll be given priority access to choose your service areas and subscription plan.</p>
            </div>
            
            <DialogFooter className="mt-4">
              <Button type="submit" className="w-full">
                Submit Pre-Registration
              </Button>
            </DialogFooter>
          </form>
        </Form>
      ) : (
        <form onSubmit={(e) => {
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
        }} className="grid gap-6 py-4">
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
      )}
    </DialogContent>
  );
};
