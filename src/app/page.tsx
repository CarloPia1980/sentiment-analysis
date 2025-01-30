import SentimentAnalysis from "@/components/sentiment-analysis";
import AboutApp from "@/components/about-app";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl h-full">
        <div className="h-full flex items-start">
          <SentimentAnalysis />
        </div>
        <div className="flex items-start">
          <AboutApp />
        </div>
      </div>
      <Toaster />
    </main>
  );
}
