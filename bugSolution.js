```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Add count to dependencies
    // to prevent infinite loop.
    setCount(prevCount => prevCount + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```