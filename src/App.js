import './App.scss';
import Result from "./components/result";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const score = useSelector(state => state.score.value)
  const choice = useSelector(state => state.choice.value)
    const dispatch = useDispatch()

  const select = (selectedChoice) => {
      dispatch({type: 'choice/select', choice: selectedChoice})
      let result = document.getElementById('result');
      let main = document.getElementsByTagName('main')[0];
      result.style.display = 'flex';
      main.style.display = 'none';
  }

  const toggleRules = () => {
      let rules = document.getElementById("rules");
      if (rules.style.display === 'flex') {
          rules.style.display = 'none'
      } else {
          rules.style.display = 'flex'
      }
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
                <h3>{score}</h3>
            </div>
        </header>

        <main className="flex-col">
            <div className="row-1 flex">
                <div className="flex">
                    <img onClick={() => select('scissors')} src="./images/icon-scissors.svg" alt="scissors" />
                </div>
            </div>
            <div className="flex row-2">
                <div className="flex">
                    <img onClick={() => select('spock')} src="./images/icon-spock.svg" alt="spock" />
                </div>
                <div className="flex">
                    <img onClick={() => select('paper')} src="./images/icon-paper.svg" alt="paper" />
                </div>
            </div>
            <div className="flex row-3">
                <div className="flex">
                    <img onClick={() => select('lizard')} src="./images/icon-lizard.svg" alt="lizard" />
                </div>
                <div className="flex">
                    <img onClick={() => select('rock')} src="./images/icon-rock.svg" alt="rock" />
                </div>
            </div>
        </main>

        <Result/>

        <button onClick={toggleRules}>Rules</button>

        <div id="rules">
            <h2>Rules</h2>
            <img src="./images/image-rules-bonus.svg" alt="rules" />
            <button onClick={toggleRules}><img src="./images/icon-close.svg" /></button>
        </div>
    </div>
  );
}

export default App;
