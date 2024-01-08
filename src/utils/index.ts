
export const returnData = <T>(data: T): T => {
    if (data) {
        return data;
    } else {
        throw new Error("Data not found");
    }
};

