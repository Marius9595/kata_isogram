function isogram(word:string): boolean {
    if(word === ""){
        return true;
    }
    return !(word[0] === word[1]);

}

//🟢🔴

describe("isogram is a word without repeated letters", ()=>{
    test("the simplest is an empty word",()=>{
        expect(isogram("")).toBeTruthy();
    })

    test("consecutives",()=>{
        expect(isogram("aalgfgr")).toBeFalsy();
        expect(isogram("aerww")).toBeFalsy();
        expect(isogram("aerffew")).toBeFalsy();
    })
})