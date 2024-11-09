import { Card } from '@/components/ui/card';
import { Music, Users, Award, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Music,
    title: 'Create Unique Beats',
    description: 'Mix and match different characters to create your own musical masterpiece',
  },
  {
    icon: Users,
    title: 'Join the Community',
    description: 'Be part of a global community of music creators and enthusiasts',
  },
  {
    icon: Award,
    title: 'Unlock Achievements',
    description: 'Complete challenges and unlock new characters and sound combinations',
  },
  {
    icon: Sparkles,
    title: 'Special Effects',
    description: 'Experience stunning visual effects that react to your music',
  },
];

export function Features() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Game Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
            <feature.icon className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}