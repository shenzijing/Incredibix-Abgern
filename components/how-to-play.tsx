import { Card } from "@/components/ui/card";
import { Music, Play, Share } from "lucide-react";

const steps = [
  {
    icon: Music,
    title: "Choose Your Characters",
    description: "Select from various quirky characters, each with unique sounds and beats."
  },
  {
    icon: Play,
    title: "Create Your Mix",
    description: "Drag and drop characters onto the stage to layer sounds and create your music."
  },
  {
    icon: Share,
    title: "Share and Enjoy",
    description: "Save your creation and share it with friends or the Incredibox community."
  }
];

export function HowToPlay() {
  return (
    <section id="how-to-play" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        How to Play Incredibox Abgerny
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <step.icon className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}