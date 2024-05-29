// App is the main component
/*
  Browsers can't read JSX. IF we inpect the page, we will not see JSX.

  Conventions
    - All elements must be closed
    - Empty elements (br, hr, img, input...) must be closed with a slash (/)
    - JSX uses camelCase style (onClick and not onclick, tabIndex...)
    - Use curly braces to include literal JavaScript
    - Use double curly braces with objects

  We cannot assign pieces of code to a variable in JSX.
*/

// Spoiler: This is a hook. (more about this later. Don't worry)
// We cannot use hook in class components.
// Class components are stateful. Function components are stateless.
import { useState } from "react";

// State means some value that you wanna keep track of. Either its true, false, 0 etc

function App() {
  const [userName, setUserName] = useState("");
  // useState() returns an array, so we use object destructuring.
  // useState() returns the variable that you wanna keep an eye on.

  // Here, we don't use querySelector or getElementById
  const handleInput = (event) => {
  console.log(userName);
    setUserName(event.target.value);
  };

  let message = (
    <h2>
      Welcome to React, <span>{userName}</span>
    </h2>
  );

  return (
    // This is not HTML. This is JSX. Under the hood, it is like an extension of JS.
    // React will call a function to build and set class. This process of generating DOM is really really fast.
    // React memorises what you have and what you want and compare both scenarios and do the minimum to give you what you need.

    // Here, JS will not be Obtrusive JS because the below code is JS.
    <main>
      <div>
        {/* Ugly JSX comment */}
        {message}

        <input type="text" placeholder="User name" onChange={handleInput} />
      </div>
    </main>
  );
}

export default App;
