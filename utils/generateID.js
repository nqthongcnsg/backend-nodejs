function generateID(length){
    const az= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var id= "";
    for(let i=0;i<length;i++){
        var index= Math.floor(Math.random()* 63);
        id+=az[index]
    }
    return id;
}
module.exports = generateID;