import { createSelector } from "reselect"

export const currentUserSelector = createSelector(
    [state => state.user],
    user => user.currentUser
)

