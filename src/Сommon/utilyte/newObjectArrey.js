

export const newObjectArrey = (array, indexId, index, newObject) => {
    return array.map(u => {
        if (u[index] === indexId) {
            return {...u, ...newObject}
        }
        return u;
    })
}