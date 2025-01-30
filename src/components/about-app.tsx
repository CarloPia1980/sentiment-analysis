import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutApp: React.FC = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Sentiment Analysis Chatbot Explanation</CardTitle>
        <CardDescription>
          An overview of the technologies and concepts used in this application
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="overview">
            <AccordionTrigger>Overview</AccordionTrigger>
            <AccordionContent>
              This application is a Sentiment Analysis Chatbot that allows users
              to input text and receive an analysis of the sentiment expressed
              in that text. It&apos;s built using modern web technologies and
              incorporates a machine learning model for sentiment analysis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="technologies">
            <AccordionTrigger>Technologies Used</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  React: A JavaScript library for building user interfaces
                </li>
                <li>
                  Next.js: A React framework that enables server-side rendering
                  and generates static websites
                </li>
                <li>
                  TypeScript: A typed superset of JavaScript that compiles to
                  plain JavaScript
                </li>
                <li>Tailwind CSS: A utility-first CSS framework</li>
                <li>
                  Framer Motion: A production-ready motion library for React
                </li>
                <li>
                  Shadcn UI: A collection of re-usable components built with
                  Radix UI and Tailwind CSS
                </li>
                <li>
                  Hugging Face Inference API: For accessing the sentiment
                  analysis model
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="model">
            <AccordionTrigger>Sentiment Analysis Model</AccordionTrigger>
            <AccordionContent>
              <p>
                The model used for sentiment analysis is
                &quot;finiteautomata/bertweet-base-sentiment-analysis&quot; from Hugging
                Face. It&apos;s a BERT-based model fine-tuned on Twitter data for
                sentiment analysis.
              </p>
              <p className="mt-2">
                <strong>Pros:</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Pre-trained on a large dataset of tweets, making it suitable
                  for informal text
                </li>
                <li>
                  Provides multi-class sentiment analysis (positive, negative,
                  neutral)
                </li>
                <li>
                  Accessible through Hugging Face&apos;s Inference API, reducing the
                  need for local model deployment
                </li>
              </ul>
              <p className="mt-2">
                <strong>Cons:</strong>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  May not perform as well on formal or domain-specific text
                </li>
                <li>
                  Reliance on an external API can introduce latency and
                  potential downtime
                </li>
                <li>Limited to the English language</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="features">
            <AccordionTrigger>Key Features</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Real-time sentiment analysis of user input</li>
                <li>Chat-like interface with user and bot messages</li>
                <li>
                  Animated message display with streaming effect for bot
                  responses
                </li>
                <li>Dark mode support</li>
                <li>Responsive design for various screen sizes</li>
                <li>Ability to clear chat history and download conversation</li>
                <li>Toast notifications for user actions</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="challenges">
            <AccordionTrigger>Challenges and Solutions</AccordionTrigger>
            <AccordionContent>
              <p>
                <strong>Challenge 1: Smooth Animations</strong>
              </p>
              <p>
                Solution: Utilized Framer Motion for fluid animations, including
                message appearance and sentiment score progress bars.
              </p>

              <p className="mt-2">
                <strong>Challenge 2: Streaming Effect</strong>
              </p>
              <p>
                Solution: Implemented a character-by-character rendering of bot
                messages to simulate a typing effect.
              </p>

              <p className="mt-2">
                <strong>Challenge 3: Responsive Design</strong>
              </p>
              <p>
                Solution: Used Tailwind CSS for responsive layouts and Shadcn UI
                components for consistent styling across devices.
              </p>

              <p className="mt-2">
                <strong>Challenge 4: State Management</strong>
              </p>
              <p>
                Solution: Leveraged React&apos;s useState and useEffect hooks for
                efficient state management and side effects.
              </p>
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default AboutApp;
