Use of Context API :-

It provides a means to share values like state, functions, or any data across the component tree 
without passing props down manually at every level.

Example - when some asks for a data from a child class or a sub-Child class , 
          we use manual props to pass properties to all its parent class as well then to its child Class.
          But using context , it provides direct access to the children class skipping the steps to add props to its parent class

It is used by applying a hook called "const value = useContext(SomeContext)"

```javascript
import { useContext } from 'react';
function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...
```
