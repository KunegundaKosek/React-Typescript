export interface UserInputState {
      initialInvestment: number;
      annualInvestment: number;
      expectedReturn: 6;
      duration: 10;
}

export interface UserInputProps {
      onChange: (inputIdentifier: string, newValue: number) => void,
      state: UserInputState,
}