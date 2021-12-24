import '../App.scss';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

function Result() {
    const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard']
    const dispatch = useDispatch();
    const userChoice = useSelector(state => state.choice.value)
    const score = useSelector(state => state.score.value)

    const whoWin = (user, house) => {
        if (user === house) return 'Draw';
        if (user === 'rock') {
            if ((house === 'lizard') || (house === 'scissors')) return 'You win';
            return 'You lose'
        }
        if (user === 'paper') {
            if ((house === 'rock') || (house === 'spock')) return 'You win';
            return 'You lose'
        }
        if (user === 'scissors') {
            if ((house === 'lizard') || (house === 'paper')) return 'You win';
            return 'You lose'
        }
        if (user === 'spock') {
            if ((house === 'rock') || (house === 'scissors')) return 'You win';
            return 'You lose'
        }
        if (user === 'lizard') {
            if ((house === 'spock') || (house === 'paper')) return 'You win';
            return 'You lose'
        }
    }

    const playAgain = () => {
        let result = document.getElementById('result');
        let main = document.getElementsByTagName('main')[0];
        result.style.display = 'none';
        main.style.display = 'flex';

        let housePicked = document.getElementById("house-pick")
        let placeholder = document.getElementsByClassName('placeholder')[0]
        let list = housePicked.classList;
        housePicked.classList.remove(list[list.length - 1]);
        housePicked.style.display = 'none';
        placeholder.style.display = 'block';

        let placeholderContainer = document.getElementsByClassName("placeholder-container")[0]
        let resultContainer = document.getElementsByClassName("result-container")[0]

        resultContainer.style.display = 'none';
        placeholderContainer.style.display = 'flex';

        dispatch({type: 'choice/select', choice: ''})
    }

    useEffect(() => {
        if (userChoice) {
            let randomChoice = choices[Math.floor(Math.random() * 5)];
            let houseChoiceImg = document.getElementById('house-choice-img')
            let resultTitle = document.getElementById("result-title")
            let housePicked = document.getElementById("house-pick")

            houseChoiceImg.src = `./images/icon-${randomChoice}.svg`;
            resultTitle.textContent = whoWin(userChoice, randomChoice);
            housePicked.classList.add(randomChoice)

            setTimeout(() => {
                let placeholder = document.getElementsByClassName('placeholder')[0]

                housePicked.style.display = 'flex';
                placeholder.style.display = 'none';
            } ,1000)

            setTimeout(() => {
                if ((userChoice !== '') && (randomChoice !== '')) {
                    let result = whoWin(userChoice, randomChoice)
                    if (result === 'You win') {
                        dispatch({type: 'score/incremented'})
                        localStorage.setItem('score', Number(score) + 1);
                    } else if (result === 'You lose') {
                        dispatch({type: 'score/decremented'})
                        localStorage.setItem('score', Number(score) - 1);
                    }
                }

                let placeholderContainer = document.getElementsByClassName("placeholder-container")[0]
                let resultContainer = document.getElementsByClassName("result-container")[0]

                resultContainer.style.display = 'flex';
                placeholderContainer.style.display = 'none';
            } ,2000)
        } else {
            dispatch({type: 'isFirstTime/no'})
        }
    }, [userChoice])

    return (
        <div className="flex-col" id="result">
            <div className="flex">
                <div className="flex-col user">
                    <div className={`border flex ${userChoice}`}>
                        <div className="flex">
                            <img src={`./images/icon-${userChoice}.svg`} alt="spock" />
                        </div>
                    </div>

                    <p>YOU PICKED</p>
                </div>

                <div className="flex-col house">
                    <div className="border flex" id="house-pick" style={{display: 'none'}}>
                        <div className="flex">
                            <img src={`./images/icon-rock.svg`} alt="paper" id="house-choice-img" />
                        </div>
                    </div>

                    <div className="placeholder"/>
                    <p>THE HOUSE PICKED</p>
                </div>

                <div className="result-container flex-col" style={{display: 'none'}}>
                    <h1 id="result-title">You win</h1>
                    <button onClick={playAgain} id="play-again-btn">Play again</button>
                </div>

                <div className="placeholder-container flex-col" style={{opacity: 0}}>
                    <h1 id="placeholder-title">ABC</h1>
                    <button id="placeholder-btn">ABC</button>
                </div>
            </div>
        </div>
    );
}

export default Result;
