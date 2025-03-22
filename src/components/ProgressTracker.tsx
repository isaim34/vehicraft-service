
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Slider } from "@/components/ui/slider";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Check, Target, Lock } from "lucide-react";

const ProgressTracker = () => {
  const [completionPercentage, setCompletionPercentage] = useLocalStorage<number>("app-completion", 0);
  const [isAdmin, setIsAdmin] = useLocalStorage<boolean>("is-admin", false);

  const handleProgressChange = (value: number[]) => {
    if (isAdmin) {
      setCompletionPercentage(value[0]);
    }
  };

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
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
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-muted-foreground">
                    {isAdmin ? "Admin mode: Adjust the completion percentage" : "Progress is updated by administrators"}
                  </p>
                  {!isAdmin && (
                    <span className="inline-flex items-center text-sm text-muted-foreground">
                      <Lock className="h-3 w-3 mr-1" /> Locked
                    </span>
                  )}
                </div>
                <Slider
                  defaultValue={[completionPercentage]}
                  value={[completionPercentage]}
                  max={100}
                  step={1}
                  onValueChange={handleProgressChange}
                  disabled={!isAdmin}
                  className={`mt-1 ${!isAdmin ? 'opacity-70 cursor-not-allowed' : ''}`}
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
              
              {/* Hidden in production, for demo purposes only */}
              <div className="mt-4 pt-3 border-t border-border">
                <button 
                  onClick={toggleAdmin}
                  className="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded text-muted-foreground transition-colors"
                >
                  {isAdmin ? "Disable Admin Mode" : "Enable Admin Mode"} (Demo Only)
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default ProgressTracker;
