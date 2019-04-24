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

### Challenges? Features?

- Add rule(s)
  - Player reset to 0 if 6 appears in two consecutive rolls (6 -> 6)
  - Define custom rules for each session (maybe)
- Game modification
  - Add input field to allow players to set winning score
- Game modification
  - Add another die to the game, player looses current score when one of them is a 1
- Multiplayer
  - Use websockets to allow players to play over the internet
- Users
  - Add backend? (apis, expressjs, mysql/postgres)
  - Login/logout
  - Basic user registration
  - Track game win history
  - User leaderboard (wins)
- Migration
  - Use Reactjs
