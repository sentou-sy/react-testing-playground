import { counter } from "./../reducers";
import { INCREMENT, DECREMENT } from "./../actionTypes";

test("counter reducer increment", () => {
  let state;
  state = counter(0, {type:INCREMENT});
  expect(state).toEqual(1);
});

test("counter reducer decrement", () => {
  let state;
  state = counter(0, {type:DECREMENT});
  expect(state).toEqual(-1);
});