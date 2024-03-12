import React, { useState } from "react";
import Header from "./components/Header";
import FromCalculator from "./components/FromCalculator";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState();
  const investmentDataHandler = (data) => {
    setUserInput(data);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = userInput.currentSavings;
    const yearlyContribution = userInput.yearlyContribution;
    const expectedReturn = userInput.expectedReturn;
    const duration = userInput.duration;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = (currentSavings * expectedReturn) / 100;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i+1,
        yearlyInterest,
        savingEndOfYear: currentSavings,
        yearlyContribution
      })
    }
  } 

  return (
    <>
      {/* <ErrorModal/> */}
      <Header />
      <FromCalculator investmentData={investmentDataHandler} />
      <Results data={yearlyData}/>
    </>
  );
}

export default App;
