// filepath: /Users/dhananjaysahoo/Startup/trixtern-website/src/app/thank-you/page.tsx
import React from "react";

const ThankYou: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200">
        Thank You!
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-4">
        Your message has been successfully sent. We will get back to you soon.
      </p>
    </div>
  );
};

export default ThankYou;