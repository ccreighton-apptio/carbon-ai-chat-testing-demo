import "@testing-library/jest-dom";

beforeEach(() => {
  window.fetch = jest.fn();
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
  }));
});
