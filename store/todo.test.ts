import { setActivePinia, createPinia } from "pinia";
import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
} from "vitest";
import { useTodoStore } from "./todo";

// describe("run", () => {
//   test("it works", () => {
//     expect(true).toBe(true);
//   });
// });

beforeAll(() => {
  setActivePinia(createPinia());
});

describe("useTodoStore", () => {
  let store: ReturnType<typeof useTodoStore>;
  beforeEach(() => {
    store = useTodoStore();
  });
  afterEach(() => {
    store.$reset();
  });

  test("creates a store", () => {
    // const store = useTodoStore();
    expect(store).toBeDefined();
  });

  test("initializes with empty items", () => {
    expect(store.items).toStrictEqual([]);
  });
});
