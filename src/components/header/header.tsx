import * as React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4">
      <div>
        <h1 className="font-semibold">차규석</h1>
        <h2 className="text-xs">Cha Gyuseok (gszzzzzz)</h2>
      </div>
      <div className="flex items-center gap-4">
        <a className="text-sm">Posts</a>
        <a className="text-sm">Resources</a>
        <a className="text-sm">About</a>
        <a className="text-sm">GitHub</a>
      </div>
    </header>
  );
}
