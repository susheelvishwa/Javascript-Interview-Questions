># Imagine you're working on a web application where a button click event is supposed to display an alert with a message, but it's not working as expected. The code seems correct, but the alert isn't showing up when the button is clicked. How would you approach debugging this issue?


## 1. Check the JavaScript Console for Errors
Open the browser's developer tools (usually by pressing F12 or right-clicking on the page and selecting "Inspect") and go to the "Console" tab. Look for any JavaScript errors that might indicate why the alert isn't working.

## 2. Verify Event Listener Attachment
Ensure that the event listener for the button click is correctly attached. Here’s an example of how it might look in JavaScript:

```javascript
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});
```

3. Ensure the DOM is Fully Loaded
If your script is running before the DOM is fully loaded, the button might not be available. Ensure your script runs after the DOM is ready. You can use DOMContentLoaded or place your script at the end of the body

```javascript
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myButton').addEventListener('click', function() {
        alert('Button clicked!');
    });
});
```

# Placing Script Before Closing </body> Tag

```javascript
<body>
    <button id="myButton">Click Me</button>
    <script>
        document.getElementById('myButton').addEventListener('click', function() {
            alert('Button clicked!');
        });
    </script>
</body>

```

4. Verify the Button Element
Ensure the button element exists in the HTML and has the correct ID:

```javascript
<button id="myButton">Click Me</button>
```

6. Use console.log for Debugging
Add console.log statements to check if the event listener is being attached and if the event is firing:

```javascript
document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button was clicked.');
    alert('Button clicked!');
});
```

7. Validate External Libraries
If you are using external libraries like jQuery, ensure they are properly loaded and there are no conflicts:


10. Simplify the Code
If the issue persists, try simplifying the code to the most basic form and gradually add complexity back until you identify the problem.

Here’s a very basic example to start with:

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>Button Click Test</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <script>
        document.getElementById('myButton').addEventListener('click', function() {
            alert('Button clicked!');
        });
    </script>
</body>
</html>

```
># How are forms created in React?

# Creating Forms in React

Creating forms in React involves managing the state of form elements and handling form submission. Here’s a step-by-step guide to creating a basic form in React.

## 1. Setting Up a React Component

First, you need to create a React component that will contain your form. You can use a functional or a class component.

## 2. Creating Form Elements

Inside your component, create the form elements such as `input`, `select`, `textarea`, etc.

## 3. Managing State

Use React's `useState` hook (for functional components) or state (for class components) to manage the form data.

## 4. Handling Input Changes

Create a function to handle changes to the form inputs and update the state accordingly.

## 5. Handling Form Submission

Create a function to handle the form submission and prevent the default behavior.

## Example: Functional Component with a Simple Form

Here’s a complete example of a functional component with a simple form:

```jsx
import React, { useState } from 'react';

const SimpleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SimpleForm;
```

# Explanation:
State Management:

- The useState hook is used to manage the form data. The formData state contains the values of the form inputs.
- The handleChange function updates the state whenever an input changes.
- Handling Input Changes:
The handleChange function is called whenever an input changes. It uses the name attribute of the input to determine which part of the state to update.
Handling Form Submission:

- The handleSubmit function prevents the default form submission behavior and logs the form data. You can replace the console log with your form submission logic (e.g., sending data to an API).


# What can you do with HOC (Higher Order Component) in React?

# Higher-Order Components (HOCs) in React

Higher-Order Components (HOCs) are an advanced pattern in React for reusing component logic. They are not part of the React API per se but are a pattern that emerges from React’s compositional nature.

## What is a Higher-Order Component?
A Higher-Order Component is a function that takes a component and returns a new component. HOCs are used to share common functionality between components without repeating code. They allow for the abstraction of component logic into reusable pieces.

## How Do HOCs Work?
An HOC is essentially a pure function with no side effects. It’s similar to functions in functional programming where they take arguments (components) and return something (enhanced components).

Here’s a simple example to illustrate the concept:

### Example HOC
```jsx
import React from 'react';

const withLogging = (WrappedComponent) => {
    return class extends React.Component {
        handleClick = () => {
            console.log('Button clicked!');
            if (this.props.onClick) {
                this.props.onClick();
            }
        };

        render() {
            return <WrappedComponent {...this.props} onClick={this.handleClick} />;
        }
    };
};

export default withLogging;
```

# Key Benefits of HOCs
- Code Reusability: HOCs promote code reuse by encapsulating common functionality that can be shared across multiple components.

- Separation of Concerns: HOCs help in separating different concerns by allowing you to split component logic into smaller, reusable functions.

- Enhancing Components: HOCs can be used to enhance components with additional props, state, or behavior.

# Common Use Cases
- Authorization: Wrapping components with authorization logic to restrict access based on user roles.

- Data Fetching: Handling data fetching logic in HOCs to avoid duplicating fetch calls across multiple components.

- State Management: Sharing state management logic between components.
Performance Optimization: Adding performance optimizations like memoization to components.

Example of a Real-World HOC
Consider a scenario where you want to add logging functionality to various components. Instead of adding the logging logic to each component, you can create an HOC:

Basic Button Component

```javascript
import React from 'react';

const Button = ({ onClick, label }) => {
    return <button onClick={onClick}>{label}</button>;
};

export default Button;

```

withLogging HOC

```javascript
import React from 'react';

const withLogging = (WrappedComponent) => {
    return class extends React.Component {
        handleClick = () => {
            console.log('Button clicked!');
            if (this.props.onClick) {
                this.props.onClick();
            }
        };

        render() {
            return <WrappedComponent {...this.props} onClick={this.handleClick} />;
        }
    };
};

export default withLogging;

```

```javascript
import React from 'react';
import Button from './Button';
import withLogging from './withLogging';

const LoggingButton = withLogging(Button);

const App = () => {
    return (
        <div>
            <h1>HOC Example</h1>
            <LoggingButton label="Click Me" />
        </div>
    );
};

export default App;

```
# Explanation

## Basic Button Component

The Button component is a simple functional component that renders a button and accepts `onClick` and `label` as props.

## Higher Order Component (withLogging)

The `withLogging` function is a Higher Order Component (HOC) that takes a component (`WrappedComponent`) and returns a new component:
- Inside the new component, it defines a `handleClick` method that logs a message to the console and calls the original `onClick` handler if it exists.
- The new component renders the `WrappedComponent` with all the original props but overrides the `onClick` prop to use the new `handleClick` method.

## Using the HOC

1. **Creating `LoggingButton` Component:**
   We create a new component called `LoggingButton` by passing the `Button` component to the `withLogging` HOC.

2. **Integration in the `App` Component:**
   In the `App` component, we use `LoggingButton` just like a regular component. When the button is clicked, it logs a message to the console.

This setup allows the `Button` component (or any other component) to be enhanced with logging functionality using the `withLogging` HOC, ensuring that logging behavior is encapsulated and can be easily applied to multiple components.


## Document Object Model (DOM)

- **Definition**: The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page as a tree of objects.
- **Purpose**: It allows programs (usually JavaScript) to dynamically access and manipulate the content, structure, and style of HTML and XML documents.
- **Features**:
  - Provides a hierarchical tree structure of elements.
  - Represents each element as an object with properties and methods.
  - Enables dynamic updating and interaction with web pages.

## Selecting DOM Elements

### Methods for Selecting Elements

1. **getElementById**:
   - Selects an element by its ID attribute.
   ```javascript
   const elementById = document.getElementById('elementId');
    ```

2. **getElementsByClassName**:

Returns a collection of elements that have a specified class name.

```JAVASCRIPT
const elementsByClass = document.getElementsByClassName('className');
```

3. **getElementsByTagName**:
Returns a collection of elements with the specified tag name.

```JAVASCRIPT
const elementsByTag = document.getElementsByTagName('tagname');
```

4. **querySelector**:
Returns the first element that matches a specified CSS selector.

```JAVASCRIPT
const element = document.querySelector('selector');
```

5. querySelectorAll:

Returns a static NodeList representing all elements that match a specified CSS selector.

```JAVASCRIPT
const elements = document.querySelectorAll('selector');

```

Manipulating DOM Elements
Common Manipulations
Changing Text Content:

```javascript
element.textContent = 'New text content';
```

Changing HTML Content:
```javascript
element.innerHTML = '<strong>New HTML content</strong>';
```

Changing Attributes:
```javascript
element.setAttribute('attributeName', 'attributeValue');
```

Styling:
```javascript
element.style.color = 'red';
```

# Example: Changing the Text of an HTML Element

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Text Example</title>
</head>
<body>
  <p id="demoText">Original Text</p>
  <button onclick="changeText()">Change Text</button>

  <script>
    function changeText() {
      // Select the paragraph element by its ID
      const paragraph = document.getElementById('demoText');
      
      // Change the text content of the paragraph
      paragraph.textContent = 'Text Changed!';
    }
  </script>
</body>
</html>

```


Summary
DOM: Provides a structured representation of a web page, allowing dynamic access and manipulation of elements.
Selection: Methods like getElementById, querySelector help in selecting elements.
Manipulation: Properties like textContent, innerHTML allow for changing content and attributes of elements dynamically.
Example: Demonstrated changing text content of an HTML element using JavaScript.

n, m = input().split()
n = int(n)
m = int(m)
arr = [int(x) for x in input().split()]

def check(arr, h):
    count = 0
    for x in arr:
        if x > h:
            count += x - h
    return count >= m

start = 0
end = 1000000000
ans = 0

while start <= end:
    mid = (start + end) // 2
    if check(arr, mid):
        ans = mid
        start = mid + 1
    else:
        end = mid - 1

print(ans)