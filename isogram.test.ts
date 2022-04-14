function isogram(word:string): boolean {
    if(word === ""){
        return true;
    }

    if(there_is_reapeated_letters(word)){
        return false;
    }

    return true;
}

function there_is_reapeated_letters(word:string):boolean{

    for (let i = 0; i < word.length; i++) {
        let letter_to_compare = word[i];
        for (let j = 0; j < word.length; j++) {
            let letter = word[j];
            if(letter_to_compare === letter) {
                return true;
            }
        }
    }
    return false;
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