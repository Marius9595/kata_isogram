function isogram(word:string): boolean {
    return true;
}

//🟢🔴

describe("isogram", ()=>{
    test("the simplest is an empty word",()=>{
        expect(isogram("")).toBeTruthy();
    })
})