

export const getUsers = (state) => {
    return  state.users.users
}
export const getTotalCount = (state) => {
    return  state.users.totalCount
}
export const getPageSize = (state) => {
    return  state.users.pageSize
}
export const getCurrentPage = (state) => {
    return  state.users.currentPage
}
export const getIsLoading = (state) => {
    return  state.users.isLoading
}
export const getIsBtnDisablet = (state) => {
    return  state.users.isBtnDisablet
}
