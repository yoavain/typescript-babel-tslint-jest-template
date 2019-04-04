import {add, distance} from "../src/sample";

it("test add", () => {
    expect(add(1, 2)).toEqual(3);
});

it("distance", () => {
    expect(distance({x: 3, y: 0}, {x: 0, y: 4})).toEqual(5);
});
