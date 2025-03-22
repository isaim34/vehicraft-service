
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Slider } from "@/components/ui/slider";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Check, Target } from "lucide-react";

const ProgressTracker = () => {
  const [completionPercentage, setCompletionPercentage] = useLocalStorage<number>("app-completion", 0);

  const handleProgressChange = (value: number[]) => {
    setCompletionPercentage(value[0]);
  };

  return (
    <section id="progress" className="py-12 bg-gradient-to-b from-background to-background/50">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Project Progress
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Track the completion of your app development with our interactive progress bar.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>App Completion</CardTitle>
                <CardDescription>Track your progress</CardDescription>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                {completionPercentage === 100 ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Target className="h-4 w-4" />
                )}
                <span className="font-medium">{completionPercentage}%</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Progress value={completionPercentage} className="h-3" />
              
              <div className="pt-1">
                <p className="text-sm text-muted-foreground mb-2">
                  Adjust the completion percentage:
                </p>
                <Slider
                  defaultValue={[completionPercentage]}
                  max={100}
                  step={1}
                  onValueChange={handleProgressChange}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-sm mt-2">
                <div className={`p-2 rounded ${completionPercentage >= 25 ? "bg-primary/20" : "bg-muted"}`}>
                  <p className="font-medium">Planning</p>
                  <p className="text-xs text-muted-foreground">25%</p>
                </div>
                <div className={`p-2 rounded ${completionPercentage >= 50 ? "bg-primary/20" : "bg-muted"}`}>
                  <p className="font-medium">Design</p>
                  <p className="text-xs text-muted-foreground">50%</p>
                </div>
                <div className={`p-2 rounded ${completionPercentage >= 75 ? "bg-primary/20" : "bg-muted"}`}>
                  <p className="font-medium">Development</p>
                  <p className="text-xs text-muted-foreground">75%</p>
                </div>
                <div className={`p-2 rounded ${completionPercentage >= 100 ? "bg-primary/20" : "bg-muted"}`}>
                  <p className="font-medium">Deployment</p>
                  <p className="text-xs text-muted-foreground">100%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default ProgressTracker;
