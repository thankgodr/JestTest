

//Arrange
const stringLength = (str) =>{
    return str.length
};

const reverseString = (str) =>{

} 

test('test the string length returns number', () => {
    expect(stringLength("1234")).toBe(4)
})

test('test the string is reversed', () => {
    expect(stringLength("1234")).toBe("4321")
})

describe("tstes describe", () => {
    test('test the string length returns number', () => {
        expect(stringLength("1234")).toBe(4)
    })
    
    test('test the string is reversed', () => {
        expect(stringLength("1234")).toBe("4321")
    })
} )