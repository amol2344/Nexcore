# Simple React Performance Demo

Shows lazy loading and memoization in the smallest possible React app.

## Run
```bash
npm install
npm run dev
```
Open the URL it prints (usually http://localhost:5173).

## Lazy loading (src/App.jsx)
`lazy()` + `Suspense` load Products and About only when visited.
Check: DevTools > Network > reload Home > click Products. A new JS file downloads.

## Memoization (src/Products.jsx)
- `useMemo`: filtering runs only when the search text changes.
- `useCallback` + `memo`: rows skip re-rendering when unrelated state changes.

Check: open the Console on /products and click the "Clicked" button.
You will NOT see "Filtering..." or "Row rendered" messages.

## Before / after proof
Remove `useMemo`, `useCallback` and `memo` from Products.jsx. Now every click prints
"Filtering..." and 50 "Row rendered" messages. Put them back and the messages vanish.
Screenshot both for your documentation.
