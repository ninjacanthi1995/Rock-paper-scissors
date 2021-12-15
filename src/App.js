import './App.scss';
import Result from "./components/result";
import {useState} from "react";

function App() {
  const [choice, setChoice] = useState('');

  const select = (selectedChoice) => {
      setChoice(selectedChoice);
      let result = document.getElementById('result');
      let main = document.getElementsByTagName('main')[0];
      console.log(main)
      result.style.display = 'flex';
      main.style.display = 'none';
  }

  return (
    <div className="App flex-col">
        <header className="flex">
            <div className="title">
                <ul>
                    <li>Rock</li>
                    <li>Paper</li>
                    <li>Scissors</li>
                    <li>Lizard</li>
                    <li>Spock</li>
                </ul>
            </div>

            <div className="score-board flex-col">
                <p>Score</p>
                <h3>0</h3>
            </div>
        </header>

        <main className="flex-col">
            <div className="row-1 flex">
                <div className="flex">
                    <img onClick={() => select('scissors')} src="./images/icon-scissors.svg" alt="scissors" />
                </div>
            </div>
            <div className="flex row-2">
                <div className="flex"><img src="./images/icon-spock.svg" alt="spock" /></div>
                <div className="flex"><img src="./images/icon-paper.svg" alt="paper" /></div>
            </div>
            <div className="flex row-3">
                <div className="flex"><img src="./images/icon-lizard.svg" alt="lizard" /></div>
                <div className="flex"><img src="./images/icon-rock.svg" alt="rock" /></div>
            </div>
        </main>

        <Result choice={choice} />

        <button>Rules</button>
    </div>
  );
}

export default App;
