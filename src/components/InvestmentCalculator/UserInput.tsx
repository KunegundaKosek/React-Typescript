import React from "react";
import styles from "../../scss/UserInput.module.scss";
import { UserInputProps } from "./interface/interface-userInput";

const UserInput: React.FC<UserInputProps> = ({ onChange, state }) => {
  return (
    <section className={styles.userInput}>
      <div>
        <p>
          <label>Inwestycja wstępna</label>
          <input
            type="number"
            required
            value={state.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", Number(event.target.value))
            }
          />
        </p>

        <p>
          <label>Roczna inwestycja</label>
          <input
            type="number"
            required
            value={state.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", Number(event.target.value))
            }
          />
        </p>
      </div>

      <div>
        <p>
          <label>Spodziewany zwrot</label>
          <input
            type="number"
            required
            value={state.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", Number(event.target.value))
            }
          />
        </p>

        <p>
          <label>Czas trwania</label>
          <input
            type="number"
            required
            value={state.duration}
            onChange={(event) =>
              onChange("duration", Number(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
