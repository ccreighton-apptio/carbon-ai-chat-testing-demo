# Carbon AI Chat Project

A React 18 project using @carbon/ai-chat with Jest snapshot testing.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

3. Run tests in watch mode:
```bash
npm run test:watch
```

## Test Structure

- `src/__tests__/ChatCustomElement.test.jsx` - Snapshot tests for ChatCustomElement component
- `src/__tests__/ChatContainer.test.jsx` - Snapshot tests for ChatContainer component

## Repro demo

1. Run `npm install; npm test` to validate that the tests currently pass
2. Update the `@carbon/ai-chat` version to `0.4.0`, `0.5.0`, or `0.5.1`
3. Run `npm install; npm test`

Expected: Tests continue to pass or snapshots require updates

Actual: Tests fail with errors like:
```
Cannot find module '@carbon/ai-chat' from 'src/__tests__/ChatContainer.test.tsx'
```
