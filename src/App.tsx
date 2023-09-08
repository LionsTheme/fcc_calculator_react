/**
 * @file React TypeScript Calculator App
 * @version 1.0.0
 * @description A simple calculator application built using React and TypeScript.
 */
import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import { calcData } from "./data";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * Interface for the state of the calculator app
 */
interface AppState {
  input: string;
  output: string;
  calculatorData: string;
}

/**
 * Interface for the props of the App component
 */
interface AppProps {}

/**
 * App component
 * @component
 */
const App: React.FC<AppProps> = () => {
  const [state, setState] = useState<AppState>({
    input: "0",
    output: "",
    calculatorData: "",
  });

  const operators: string[] = ["AC", "/", "*", "+", "-", "=", "%"];
  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  /**
   * Handles the submission of the calculator data
   */
  const handleSubmit = (): void => {
    // eslint-disable-next-line no-new-func
    const total = Function("return " + state.calculatorData)();
    setState((prevState) => ({
      ...prevState,
      input: total,
      output: `${state.calculatorData} = ${total}`,
      calculatorData: `${total}`,
    }));
  };

  /**
   * Clears the calculator data
   */
  const handleClear = (): void => {
    setState((prevState) => ({
      ...prevState,
      input: "0",
      calculatorData: "",
    }));
  };

  /**
   * Handles the input of numbers
   * @param value - The number value to be inputted
   */
  const handleNumbers = (value: number): void => {
    if (!state.calculatorData.length) {
      setState((prevState) => ({
        ...prevState,
        input: `${value}`,
        calculatorData: `${value}`,
      }));
    } else {
      if (
        value === 0 &&
        (state.calculatorData === "0" || state.input === "0")
      ) {
        setState((prevState) => ({
          ...prevState,
          calculatorData: `${state.calculatorData}`,
        }));
      } else {
        const lastChar = state.calculatorData.charAt(
          state.calculatorData.length - 1
        );
        const isLastCharOperator =
          lastChar === "*" || operators.includes(lastChar);
        setState((prevState) => ({
          ...prevState,
          input: isLastCharOperator ? `${value}` : `${state.input}${value}`,
          calculatorData: `${state.calculatorData}${value}`,
        }));
      }
    }
  };

  /**
   * Handles the input of the dot (decimal) operator
   */
  const dotOperator = (): void => {
    const lastChar = state.calculatorData.charAt(
      state.calculatorData.length - 1
    );
    if (!state.calculatorData.length) {
      setState((prevState) => ({
        ...prevState,
        input: "0.",
        calculatorData: "0.",
      }));
    } else {
      if (lastChar === "*" || operators.includes(lastChar)) {
        setState((prevState) => ({
          ...prevState,
          input: "0.",
          calculatorData: `${state.calculatorData} 0.`,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          input:
            lastChar === "." || state.input.includes(".")
              ? `${state.input}`
              : `${state.input}.`,
          calculatorData:
            lastChar === "." || state.input.includes(".")
              ? `${state.calculatorData}`
              : `${state.calculatorData}.`,
        }));
      }
    }
  };

  /**
   * Handles the input of operators
   * @param value - The operator value to be inputted
   */
  const handleOperators = (value: string): void => {
    if (state.calculatorData.length) {
      setState((prevState) => ({
        ...prevState,
        input: `${value}`,
      }));
      const beforeLastChar = state.calculatorData.charAt(
        state.calculatorData.length - 2
      );
      const beforeLastCharIsOperator =
        operators.includes(beforeLastChar) || beforeLastChar === "*";
      const lastChar = state.calculatorData.charAt(
        state.calculatorData.length - 1
      );
      const lastCharIsOperator =
        operators.includes(lastChar) || lastChar === "*";
      const validOp = value === "*" ? "*" : value;
      if (
        (lastCharIsOperator && value !== "-") ||
        (beforeLastCharIsOperator && lastCharIsOperator)
      ) {
        if (beforeLastCharIsOperator) {
          const updatedValue = `${state.calculatorData.substring(
            0,
            state.calculatorData.length - 2
          )}${value}`;
          setState((prevState) => ({
            ...prevState,
            calculatorData: updatedValue,
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            calculatorData: `${state.calculatorData.substring(
              0,
              state.calculatorData.length - 1
            )}${validOp}`,
          }));
        }
      } else {
        setState((prevState) => ({
          ...prevState,
          calculatorData: `${state.calculatorData}${validOp}`,
        }));
      }
    }
  };

  /**
   * Handles the input from the keyboard
   * @param value - The input value from the keyboard
   */
  const handleInput = (value: string | number): void => {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);
    switch (value) {
      case "=":
        handleSubmit();
        break;
      case "AC":
        handleClear();
        break;
      case number:
        handleNumbers(value);
        break;
      case ".":
        dotOperator();
        break;
      case operator:
        handleOperators(value);
        break;
      default:
        break;
    }
  };

  /**
   * Handles the output of the calculator data
   */
  const handleOutput = (): void => {
    setState((prevState) => ({
      ...prevState,
      output: state.calculatorData,
    }));
  };

  useEffect(() => {
    handleOutput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.calculatorData]);

  return (
    <section
      id="javaScript-calculator-section"
      className="w-full pt-20 md:pt-22 lg:pt-24 pb-6 sm:pb-8 md:pb-10 h-screen"
      style={{
        backgroundImage: `url(/images/pexels-skitterphoto-1019470.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container className="flex flex-1 h-full">
        <div
          id="calculator-wrap"
          className="flex flex-col items-center justify-center w-full gap-2"
        >
          <article
            id="calculator"
            className="flex flex-col items-start justify-between w-full px-4 pt-2 pb-4 rounded-xl shadow-xl max-w-[300px] mx-auto bg-glass gap-2"
          >
            <Header className="" />
            <Display
              className="mb-4"
              input={state.input}
              result={state.output}
            />
            <Keyboard calcData={calcData} handleInput={handleInput} />
          </article>
          <Footer />
        </div>
      </Container>
    </section>
  );
};

export default App;
