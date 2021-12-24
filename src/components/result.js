import '../App.scss';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

function Result() {
    const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard']
    const dispatch = useDispatch();
    const userChoice = useSelector(state => state.choice.value)

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

        let placeholderTitle = document.getElementById("placeholder-title")
        let button = document.getElementById("play-again-btn")
        let placeholderBtn = document.getElementById("placeholder-btn")
        let resultTitle = document.getElementById("result-title")
        resultTitle.style.display = 'none';
        button.style.display = 'none';
        placeholderTitle.style.display = 'block';
        placeholderBtn.style.display = 'block';

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
                    } else if (result === 'You lose') {
                        dispatch({type: 'score/decremented'})
                    }
                }

                let placeholderTitle = document.getElementById("placeholder-title")
                let button = document.getElementById("play-again-btn")
                let placeholderBtn = document.getElementById("placeholder-btn")

                resultTitle.style.display = 'block';
                button.style.display = 'block';
                placeholderTitle.style.display = 'none';
                placeholderBtn.style.display = 'none';
            } ,2000)
        } else {
            dispatch({type: 'isFirstTime/no'})
        }
    }, [userChoice])

    return (
        <div className="flex-col" id="result">
            <div className="flex">
                <div className="flex-col">
                    <div className={`border flex ${userChoice}`}>
                        <div className="flex">
                            <img src={`./images/icon-${userChoice}.svg`} alt="spock" />
                        </div>
                    </div>

                    <p>YOU PICKED</p>
                </div>
                <div className="flex-col">
                    <div className="border flex" id="house-pick" style={{display: 'none'}}>
                        <div className="flex">
                            <img src={`./images/icon-rock.svg`} alt="paper" id="house-choice-img" />
                        </div>
                    </div>

                    <div className="placeholder"/>
                    <p>THE HOUSE PICKED</p>
                </div>
            </div>
            <h1 id="result-title" style={{display: 'none'}}>You win</h1>
            <h1 id="placeholder-title" style={{opacity: 0}}>ABC</h1>
            <button onClick={playAgain} id="play-again-btn" style={{display: 'none'}}>Play again</button>
            <button id="placeholder-btn" style={{opacity: 0}}>ABC</button>
        </div>
    );
}

export default Result;
