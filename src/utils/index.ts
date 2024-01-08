
export const returnData = (data:any)=>{
    if(data){
        return { data };
    }else{
        throw new Error("data Not found")
    }
}