
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  style: React.CSSProperties;
  onOpenSignupDialog: (service: string) => void;
}

export const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  style,
  onOpenSignupDialog 
}: ServiceCardProps) => {
  return (
    <Card 
      className={cn(
        "border border-border/60 transition-all hover:shadow-md animate-fade-up",
        "hover:border-primary/20 hover:-translate-y-1 group"
      )}
      style={style}
    >
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-sm mb-4">
          {description}
        </CardDescription>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => onOpenSignupDialog(title)}
          >
            Sign Up for {title}
          </Button>
        </DialogTrigger>
      </CardContent>
    </Card>
  );
};
