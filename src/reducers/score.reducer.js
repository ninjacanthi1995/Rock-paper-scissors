function scoreReducer(state = { value: localStorage.getItem('score') }, action) {
    switch (action.type) {
        case 'score/incremented':
            return { value: Number(state.value) + 1 }
        case 'score/decremented':
            return { value: Number(state.value) - 1 }
        default:
            return state
    }
}

export default scoreReducer;