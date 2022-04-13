function isogram(word:string): boolean {
    return true;
}

//🟢🔴

describe("isogram", ()=>{
    test("the simplest is an empty word",()=>{
        expect(isogram("")).toBeTruthy();
    })

    test("is a word without repeated letters",()=>{
        expect(isogram("aaa")).toBeFalsy();
        expect(isogram("sdaffw")).toBeFalsy();
        expect(isogram("qwedsfq")).toBeFalsy();
    })
})