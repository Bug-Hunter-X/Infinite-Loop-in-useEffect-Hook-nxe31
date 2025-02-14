# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook:  creating an infinite loop by attempting to update state without specifying the correct dependencies. The bug is caused by updating the `count` state inside the `useEffect` without including `count` in the dependency array.  This leads to a continuous re-render and an infinite loop.

The solution shows how to correctly define dependencies to avoid the issue.