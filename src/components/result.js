import '../App.scss';

function Result(props) {
  return (
    <div className="flex-col" id="result">
        <div className="flex">
            <div className="flex-col">
                <div className="flex">
                    <img src={`./images/icon-${props.choice}.svg`} alt="spock" />
                </div>
                <p>You picked</p>
            </div>
            <div className="flex-col">
                <div className="flex">
                    <img src="./images/icon-paper.svg" alt="paper" />
                </div>
                <p>The house picked</p>
            </div>
        </div>
        <h1>You win</h1>
        <button>Play again</button>
    </div>
  );
}

export default Result;
