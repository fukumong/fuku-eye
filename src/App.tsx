import { useState } from "react";
import { Drawer } from "src/components/page/sidebar/drawer";

function App() {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<"left" | "right" | "top" | "bottom">("left");

  return (
    <div className="App h-screen w-screen">
      <Drawer
        open={open}
        side={side}
        content={
          <div className="bg-stone-500 min-h-64 min-w-64 h-full w-full">
            Hello Side
          </div>
        }
        children={
          <div className="bg-stone-600 h-screen flex items-center justify-center">
            <button onClick={() => setOpen((open) => !open)}>open</button>
            <button onClick={() => setSide("left")}>left</button>
            <button onClick={() => setSide("top")}>top</button>
            <button onClick={() => setSide("right")}>right</button>
            <button onClick={() => setSide("bottom")}>bottom</button>
          </div>
        }
      />
    </div>
  );
}

export default App;
