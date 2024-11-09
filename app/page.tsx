import { GameFrame } from '@/components/game-frame';
import { Features } from '@/components/features';
import { FAQ } from '@/components/faq';
import { HowToPlay } from '@/components/how-to-play';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <section className="text-center space-y-4 pt-8">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 leading-relaxed md:leading-relaxed pb-2">
          Incredibox Abgerny
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Create unique beats by dragging quirky characters into the mix. Join
          millions of players in this musical adventure!
        </p>
      </section>

      <GameFrame />

      <Features />

      <HowToPlay />

      <FAQ />
    </div>
  );
}