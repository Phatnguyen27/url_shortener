export const reducer = (state = { value: "NONE"}, action) => {
    switch (action.type) {
        case "Update Text":
            return { value : action.value };
        default:
            return state;
    }
}