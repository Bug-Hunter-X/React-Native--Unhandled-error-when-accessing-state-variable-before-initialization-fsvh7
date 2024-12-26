# React Native: Unhandled error when accessing state variable before initialization

This repository demonstrates a common error in React Native applications: attempting to access a state variable before it has been properly initialized.

## Problem
The `bug.js` file contains a component that fetches data from an API. However, it tries to render data.name before the `setData` function has been called. This leads to a runtime error because `data` is `undefined` during the initial render.

## Solution
The `bugSolution.js` file provides a solution by using optional chaining and nullish coalescing to handle the case where `data` might be `undefined` or `null`.  This ensures that the app doesn't crash and gracefully handles missing data.

## How to reproduce
1. Clone this repository.
2. Run `npx react-native run-android` or `npx react-native run-ios`.
3. Observe the error in the `bug.js` example.
4. Observe the corrected behavior in the `bugSolution.js` example.