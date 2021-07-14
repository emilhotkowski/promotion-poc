const myMath = reqire("../index")

describe("Math test", () => {

    it("Should add numbers correctly", () => {
        expect(myMath.add(2, 2)).toEqual(4)
    })

});