import '../App.scss';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function Result() {
    const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard']
    const [houseChoice, setHouseChoice] = useState('')
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
        let randomChoice = choices[Math.floor(Math.random() * 5)];

        setTimeout(() => {
            setHouseChoice(randomChoice)
            let housePicked = document.getElementById("house-pick")
            let placeholder = document.getElementsByClassName('placeholder')[0]
            housePicked.style.display = 'flex';
            placeholder.style.display = 'none';
        } ,2000)

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
            let resultTitle = document.getElementById("result-title")
            resultTitle.style.display = 'block';
            button.style.display = 'block';
            placeholderTitle.style.display = 'none';
            placeholderBtn.style.display = 'none';
        } ,4000)
    }, [userChoice])

    return (
        <div className="flex-col" id="result">
            <div className="flex">
                <div className="flex-col">
                    <div className="flex">
                        <img src={`./images/icon-${userChoice}.svg`} alt="spock" />
                    </div>
                    <p>You picked</p>
                </div>
                <div className="flex-col">
                    <div className="flex" id="house-pick" style={{display: 'none'}}>
                        <img src={`./images/icon-${houseChoice}.svg`} alt="paper" />
                    </div>
                    <div className="placeholder"/>
                    <p>The house picked</p>
                </div>
            </div>
            <h1 id="result-title" style={{display: 'none'}}>{whoWin(userChoice, houseChoice)}</h1>
            <h1 id="placeholder-title" style={{color: '#203757'}}>ABC</h1>
            <button onClick={playAgain} id="play-again-btn" style={{display: 'none'}}>Play again</button>
            <button id="placeholder-btn" style={{border: '1px solid #203757', color: '#203757'}}>ABC</button>
        </div>
    );
}

export default Result;
