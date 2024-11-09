import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Incredibox Abgerny?",
    answer: "Incredibox Abgerny is an interactive music creation game where you can create unique beats by mixing different characters. Each character represents a different sound, allowing you to create your own musical masterpiece."
  },
  {
    question: "How do I play Incredibox Abgerny?",
    answer: "Simply drag and drop characters onto the stage to create your mix. Each character adds a unique sound to your composition. You can experiment with different combinations to create your perfect beat."
  },
  {
    question: "Is Incredibox Abgerny free to play?",
    answer: "Yes! Incredibox Abgerny is completely free to play in your web browser. No downloads or installations are required."
  },
  {
    question: "Can I save my music creations?",
    answer: "Yes, you can save your compositions and share them with others. This allows you to build a collection of your favorite mixes and share them with the community."
  },
  {
    question: "What devices can I play Incredibox Abgerny on?",
    answer: "Incredibox Abgerny works on any device with a modern web browser, including computers, tablets, and smartphones."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}