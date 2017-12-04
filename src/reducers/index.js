const initialState = {
	react: 0,
	angular: 0,
	vuejs: 0
}

export default (state = initialState, action) => {
	switch (action.type) {

		case 'VOTE_ANGULAR':
			console.log('VOTE ANGULAR');
			return Object.assign({}, state, {
				angular: state.angular + 1
			})
		case 'VOTE_REACT':
					console.log('VOTE REACT');
      return Object.assign({}, state, {
        react: state.react + 1
      })
		case 'VOTE_VUEJS':
					console.log('VOTE VUEJS');
      return Object.assign({}, state, {
        vuejs: state.vuejs + 1
      })
		default:
			return state
	}
}
