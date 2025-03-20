import React, { useState } from "react";
import { marked } from "marked";

const defaultMarkdown = `# Heading 1

## Heading 2

[FreeCodeCamp](https://www.freecodecamp.org)

\`Inline Code\`

\`\`\`
console.log("Hello, Markdown!");
\`\`\`

- List Item

> Blockquote

**Bold Text**

![Image](https://via.placeholder.com/150)`;

const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div>
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown, { breaks: true }) }}
      />
    </div>
  );
};

export default App;
