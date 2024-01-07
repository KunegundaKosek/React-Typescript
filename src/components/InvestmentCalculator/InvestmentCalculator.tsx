import React from "react";
import Header from "./Header";
import logo from "../../images/investment-calculator-logo.png";
import UserInput from "./UserInput";
import { useReducer } from "react";
import { UserInputState } from "./interface/interface-userInput";
import Results from "./Results";
import styles from "../../scss/InvestmentCalculator.module.scss";

const initialState: UserInputState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

const reducer = (state: UserInputState, action: any) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        [action.payload.inputIdentifier]: action.payload.newValue,
      };
    default:
      return state;
  }
};

const InvestmentCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputIsValid = state.duration >= 1;

  const handleChange = (inputIdentifier: string, newValue: number) => {
    dispatch({
      type: "UPDATE_INPUT",
      payload: { inputIdentifier, newValue },
    });
  };

  return (
    <div>
      <Header
        image={logo}
        alt="Zjęcie przedstawiające worek pieniędzy"
        text="Kalkulator Inwestycyjny"
      />

      <UserInput onChange={handleChange} state={state} />
      {!inputIsValid && (
        <p className={styles.center}>Wprowadź czas trwania większy od zera.</p>
      )}
      {inputIsValid && <Results input={state} />}
    </div>
  );
};

export default InvestmentCalculator;
