import { reducer as toastrReducer } from 'react-redux-toastr'

import { reducer as UserReduser } from './user/user.slice'

export const reducers = {
	user: UserReduser,
	toastr: toastrReducer,
}
