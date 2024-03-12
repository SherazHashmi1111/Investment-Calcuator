import React, { useState } from "react";
import "./FormCalculator.css";

function FromCalculator(props) {
  const [currSaving, setCurrSaving] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedIterest] = useState("");
  const [duration, setDuration] = useState("");
  const currentSavingHandler = (e) => {
    setCurrSaving(e.target.value);
  };
  const yearlyContributionHandler = (e) => {
    setYearlyContribution(e.target.value);
  };
  const expectedInterestHandler = (e) => {
    setExpectedIterest(e.target.value);
  };
  const durationHandler = (e) => {
    setDuration(e.target.value);
  };

  const dataSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      currentSavings: +currSaving,
      yearlyContribution: +yearlyContribution,
      expectedReturn: +expectedReturn,
      duration: +duration,
    };
    props.investmentData(formData);
    setCurrSaving("");
    setExpectedIterest("");
    setYearlyContribution("");
    setDuration("");
  };

  return (
    <form onSubmit={dataSubmitHandler} className="form">
      <div className="input__group">
        <p>
          <label htmlFor="current-saving">current saving ($)</label>
          <input
            type="number"
            step="1"
            id="current-saving"
            onChange={currentSavingHandler}
            value={currSaving}
          />
        </p>
        <p>
          <label htmlFor="yearly-contibution">yearly contribution ($)</label>
          <input
            type="number"
            step="1"
            id="yearly-contibution"
            onChange={yearlyContributionHandler}
            value={yearlyContribution}
          />
        </p>
      </div>
      <div className="input__group">
        <p>
          <label htmlFor="expected-interest">
            expected interest (%, per year)
          </label>
          <input
            type="number"
            step="1"
            id="expected-interest"
            onChange={expectedInterestHandler}
            value={expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration years (years)</label>
          <input
            type="number"
            step="1"
            id="duration"
            max="20"
            onChange={durationHandler}
            value={duration}
          />
        </p>
      </div>
      <div className="actions">
        <button type="reset" className="btnAlt">
          Reset
        </button>
        <button type="submit" className="btn">
          Calculate
        </button>
      </div>
    </form>
  );
}

export default FromCalculator;
