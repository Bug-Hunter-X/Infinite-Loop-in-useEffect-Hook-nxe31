```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: trying to update count inside the effect
    // without depending on count.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```