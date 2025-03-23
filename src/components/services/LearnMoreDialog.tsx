
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

export const LearnMoreDialog = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Join Our Platform</DialogTitle>
        <DialogDescription>
          Mobex connects skilled mechanics with customers who need auto services.
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
  );
};
