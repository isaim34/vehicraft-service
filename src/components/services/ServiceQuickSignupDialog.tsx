
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

interface ServiceQuickSignupDialogProps {
  service: string;
}

export const ServiceQuickSignupDialog = ({ service }: ServiceQuickSignupDialogProps) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Sign Up for {service}</DialogTitle>
        <DialogDescription>
          Choose how you want to participate
        </DialogDescription>
      </DialogHeader>
      <div className="grid grid-cols-2 gap-4 py-4">
        <Button
          onClick={() => toast.success(`You've signed up to receive ${service} services for free!`)}
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
          onClick={() => toast.success(`You've signed up to offer ${service} services! Please complete the payment process to activate your account.`)}
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
  );
};
