const INITIAL_STATE = { selected: '', visivel: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED': 
            return { ...state, selected: action.payload }
        case 'TAB_SHOWED':
            return { ...state, visivel: action.payload }
        
        default:
            return state
    }
}