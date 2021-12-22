function choiceReducer(state = { value: '' }, action) {
    switch (action.type) {
        case 'choice/select':
            return { value: action.choice }
        default:
            return state
    }
}

export default choiceReducer;