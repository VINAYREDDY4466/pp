import React, { useState } from "react";
import { motion } from "framer-motion";

const Tutorial = () => {
  const steps = [
    "Welcome! Let's start the tutorial.",
    "Step 1: Click on the target below.",
    "Step 2: Move your cursor around to highlight areas.",
    "Step 3: Complete the task to proceed."
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="tutorial-container">
      <motion.div
        className="instruction-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p>{steps[currentStep]}</p>
      </motion.div>

      {currentStep === 1 && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="target"
          onClick={handleNextStep}
        >
          Hello world Next
        </motion.button>
      )}

      {currentStep > 0 && currentStep < steps.length - 1 && (
        <button onClick={handleNextStep} className="next-button">
          Next
        </button>
      )}
      
      {currentStep === steps.length - 1 && (
        <p className="completion-message">Tutorial Completed!</p>
      )}
    </div>
  );
};

export default Tutorial;
