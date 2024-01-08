export const returnData = (data) => {
    if (data) {
        return data;
    }
    else {
        throw new Error("Data not found");
    }
};
