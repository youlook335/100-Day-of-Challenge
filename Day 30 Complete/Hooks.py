# Rebuilding the PDF with all 7 hooks and examples

pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font('Arial', 'B', 16)

# Title
pdf.cell(200, 10, txt="React Hooks Guide with Examples", ln=True, align='C')

# Hook 1 - useState
pdf.ln(10)
pdf.set_font('Arial', 'B', 14)
pdf.cell(200, 10, txt="1. useState", ln=True)

pdf.set_font('Arial', '', 12)
pdf.multi_cell(0, 10, txt="""
useState is the hook that allows you to add state to a functional component.
It returns a state variable and a function to update that state.

Example 1:
```jsx
import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
