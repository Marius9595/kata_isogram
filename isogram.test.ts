function isogram(word:string): boolean {
    if(word === ""){
        return true;
    }

    for (let i = 0; i < word.length; i++) {

        let letter_to_compare = word[i];
        for (let j = 0; j < word.length; j++) {
            let letter = word[j];
            if(letter_to_compare === letter) {
                return false;
            }
        }
    }

    return true;
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