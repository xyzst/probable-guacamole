# DOM Manipulation

### Document Object Model (DOM)

- Structured representation of HTML document

- DOM used to connect webpages to scripts like JS

- For each HTML box, there is an element that is accessible

- JS <--interaction/manipulation--> DOM

### Events

- Notifications that are sent to notify the code that something happened on the page
  - Clicking a button, resizing window, scrolling down ...
- Listener: function that performs an action based on an event
  - Waits for specific event to happen
- How are events processed?
  - After the execution stack is empty
  - Message queue pressure built up
    - Each event in queue results in adding to the execution stack
