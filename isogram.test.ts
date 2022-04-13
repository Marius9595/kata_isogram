function isogram(word:string): boolean {
    return null;
}

//🟢🔴

describe("isogram", ()=>{
    test("the simplest is an empty word",()=>{
        expect(isogram("")).toBeTruthy();
    })
})