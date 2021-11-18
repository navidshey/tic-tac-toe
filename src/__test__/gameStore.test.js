import { createGameStore } from './../stores/gameStore';

let store; 

beforeAll(() => {
    store = new createGameStore();
});

describe("<Store>", () => {
  it("have initial state", async () => {
      expect(store.boardRow).toBe(undefined);
      expect(store.winnerLength).toBe(undefined);
      expect(store.history.length).toBe(0);
      expect(store.stepNumber).toBe(0);
      expect(store.xIsNex).toBe(true);
      expect(store.clickedIndex.length).toBe(0);
      expect(store.isFinished).toBe(false);
      expect(store.status).toBe("Next player: O");
      expect(store.hasWinner).toBe(null);
  });

  it("should clear data on calling startNewGame", () => {});

  it("should enter true data on calling  setStartupData", () => {});

  it("should calculateWinner truely", async () => {});

});
