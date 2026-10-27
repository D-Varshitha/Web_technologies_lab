import { useState } from "react";
import "./App.css";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("This is the toggles btw the text and the input");

  return (
    <div className="container">
      <div className="card">
        <h1>Text Editor</h1>

        {isEditing ? (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <p>{text}</p>
        )}

        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}

export default App;