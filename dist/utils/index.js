export const returnData = (data) => {
    if (data) {
        return { data };
    }
    else {
        throw new Error("data Not found");
    }
};
