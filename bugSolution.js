This solution utilizes optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access the `name` property of the `data` object. If `data` or `data.name` is null or undefined, the expression short-circuits and returns an empty string.

```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name ?? 'Loading...'}</Text>
    </View>
  );
};

```

This approach prevents the error by providing a default value ('Loading...') when `data` is not yet available.  Alternatively, you could show a loading indicator or error message depending on your app's design.