function scoreReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'score/incremented':
            return { value: state.value + 1 }
        case 'score/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

export default scoreReducer;