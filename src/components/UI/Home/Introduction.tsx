import React from "react";
import styles from '../../../scss/Introduction.module.scss';
// import { faLinkedin } from "@fortawesome/fontawesome-free-brands";

const Introduction = () => {
  return (
    <article className={styles.introduction}>
      <h1>Witam na mojej stronie!</h1>
      <p>
        Jestem Kunegunda, a ta strona pełni rolę wirtualnego portfolio, w którym
        dzielę się moimi umiejętnościami i projektami z zakresu programowania.
        Strona została zbudowana przy użyciu technologii React i Typescript, co
        pozwoliło na stworzenie dynamicznego i responsywnego środowiska.
      </p>

      <h2>Użyte technologie</h2>
      <ul>
        <li>
          <strong>React - </strong>
          <em>
            Główny trzon strony oparty na jednym z najpopularniejszych
            frameworków JavaScript - React. To narzędzie umożliwia mi tworzenie
            interaktywnych interfejsów użytkownika oraz składanie aplikacji w
            modularne komponenty.
          </em>
        </li>

        <li>
          <strong>TypeScript - </strong>
          <em>
            Jako fan statycznego typowania, zdecydowałem się używać Typescript,
            co pozwala na bardziej bezpieczne i zorganizowane pisanie kodu.
          </em>
        </li>

        <li>
          <strong>SCSS i Bootstrap - </strong>
          <em>
            Do stylizacji strony wykorzystuję preprocesor SCSS w połączeniu z
            Bootstrapem. To połączenie umożliwia mi szybkie i efektywne
            tworzenie atrakcyjnego wyglądu strony.
          </em>
        </li>
      </ul>

      <h2>Projekty</h2>
      <p>Na tej stronie znajdziesz trzy z moich projektów: </p>
      <ol>
        <li>
          <a href="/">TodoApp: </a>
          <em>
            Aplikacja do zarządzania zadaniami, która pozwala na dodawanie,
            usuwanie i oznaczanie zadań jako ukończone.
          </em>
        </li>

        <li>
          <a href="/">Pogoda: </a>
          <em>
            Aplikacja wykorzystująca zewnętrzne API do dostarczania informacji o
            aktualnej pogodzie. Pozwala sprawdzić prognozę pogody dla wybranego
            miasta.
          </em>
        </li>

        <li>
          <a href="/">Kalkulator: </a>
          <em>
            Prosty kalkulator, który umożliwia podstawowe operacje matematyczne.
            Przydatny do szybkiego obliczania wyników.
          </em>
        </li>
      </ol>

      <b>
        Zapraszam do eksploracji moich projektów i zapoznania się z moimi
        umiejętnościami programistycznymi. Jeśli masz pytania śmiało napisz!
        Dziękuję za odwiedzenie mojej strony.
      </b>

    </article>
  );
};

export default Introduction;
