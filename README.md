# Toodle Dropzone

## Table of Contents

* [Installation](#installation)
* [Example](#example)


## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install toodle-dropzone
    $ yarn add toodle-dropzone


## Example

Here is a simple example of toodle-dropzone 

```jsx
import DropZone from "toodle-dropzone";

const App = () => {
  const handleFileOnChange = (file) => {
    console.log(file);
    console.log(file.name);
  }
  return (
    <div className="App">
      <DropZone
        handleFileOnChange={handleFileOnChange}
        className="add-your-custom-css"
        accept="image/*" // Add any file type you need
      >
        Drag or Upload
      </DropZone >
    </div>
  );
}

export default App;

```
