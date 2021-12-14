import './App.scss';

function App() {
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
            <div className="row-1 flex"><img src="./images/icon-scissors.svg" alt="scissors" /></div>
            <div className="flex row-2">
                <div><img src="./images/icon-spock.svg" alt="spock" /></div>
                <div><img src="./images/icon-paper.svg" alt="paper" /></div>
            </div>
            <div className="flex row-3">
                <div><img src="./images/icon-lizard.svg" alt="lizard" /></div>
                <div><img src="./images/icon-rock.svg" alt="rock" /></div>
            </div>
        </main>

        <button>Rules</button>
    </div>
  );
}

export default App;
