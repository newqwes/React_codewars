// an input field with placeholder
// an onChange action changing the value in state
// действие onClick, выделяющее весь введенный текст

import React, { useState, useRef } from 'react';

export default function NameInput() {
  const [state, setState] = useState({ value: '' })
  const refInput = useRef(null);
  return (
    <label className="header-name">
      <input
        placeholder="Untitled"
        onChange={(e) => setState({ value: e.target.value })}
        value={state.value}
        onClick={() => {
          refInput.current.setSelectionRange(0, state.value.length);
        } }
        ref={refInput}
			/>
    </label>
  );
}