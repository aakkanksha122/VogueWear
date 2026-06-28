import { useState } from "react";
import "../styles/AIStylist.css";
import AIStylistModal from "./AIStylistModal";

function AIStylist() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button className="ai-button" onClick={() => setIsOpen(true)}>
        ✨
      </button>
      {/* Chat Window */}
      {isOpen && <AIStylistModal onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default AIStylist;
