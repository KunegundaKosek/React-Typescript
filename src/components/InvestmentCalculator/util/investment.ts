import { InvestmentProps } from "./interface-investment";

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: InvestmentProps) {
 const annualData = [];
 let investmentValue = initialInvestment;

 for(let i = 0; i < duration; i++) {
      const interestEarnedYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedYear + annualInvestment;

      annualData.push({
            year: i + 1,
            interest: interestEarnedYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
      });
 }

 return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
