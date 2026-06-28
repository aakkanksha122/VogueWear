import "../styles/AIStylistModal.css";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { products as allProducts } from "../data/product";
import { useNavigate } from "react-router-dom";

function AIStylistModal({ onClose }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [products, setProducts] = useState([]);

  const handleSend = () => {
    if (!message.trim()) {
      setAiResponse(
        "Tell me about your occasion and I'll curate the perfect look for you.",
      );
      return;
    }
    if (message.toLowerCase().includes("office")) {
      setAiResponse(
        "For a polished office look, I recommend structured silhouettes, neutral tones and timeless essentials.",
      );
      setProducts(
        allProducts.filter((product) => product.tags.includes("office")),
      );
    } else if (message.toLowerCase().includes("brunch")) {
      setAiResponse(
        "For a casual brunch, opt for flowy dresses, light fabrics and pastel colors.",
      );
      setProducts(
        allProducts.filter((product) => product.tags.includes("brunch")),
      );
    } else if (message.toLowerCase().includes("wedding")) {
      setAiResponse(
        "For a wedding guest outfit, consider elegant dresses, statement accessories and sophisticated heels.",
      );
      setProducts(
        allProducts.filter((product) => product.tags.includes("wedding")),
      );
    } else if (message.toLowerCase().includes("vacation")) {
      setAiResponse(
        "For a relaxed vacation look, go for breezy dresses, comfortable sandals and vibrant prints.",
      );
      setProducts(
        allProducts.filter((product) => product.tags.includes("vacation")),
      );
    } else {
      setAiResponse(
        "I couldn't find an exact match, but I'd recommend exploring our latest collection for timeless VogueWear styles.",
      );
      setProducts(allProducts);
    }
    setMessage("");
  };
  return (
    <div className="ai-modal">
      <div className="ai-modal-header">
        <div className="ai-title">
          <p>✨ VogueWear</p>
          <h2>Style Concierge</h2>
        </div>
        <button className="ai-modal-close" onClick={onClose}>
          ✕
        </button>
      </div>

      <div className="ai-modal-body">
        <h3>How can I style you today?</h3>
        <p>
          Describe the occasion, dress code, or mood, and I'll recommend outfits
          from our collection.
        </p>
        <div className="ai-suggestions">
          <button
            onClick={() => setMessage("Looking for a stylish office outfit.")}
          >
            👔 Office Look
          </button>

          <button
            onClick={() => setMessage("Looking for a casual brunch look.")}
          >
            ☕ Brunch
          </button>

          <button
            onClick={() =>
              setMessage("Looking for a formal wedding guest outfit.")
            }
          >
            💍 Wedding Guest
          </button>

          <button
            onClick={() => setMessage("Looking for a relaxed vacation outfit.")}
          >
            🌴 Vacation
          </button>
        </div>
        {aiResponse && (
          <div className="ai-response">
            <p>{aiResponse}</p>
          </div>
        )}
        {products.length > 0 && (
          <div className="ai-products">
            <h4 className="ai-products-title">Recommended For You</h4>

            {products.slice(0, 3).map((product) => (
              <div
                className="ai-product-card"
                key={product.id}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  onClose();
                }}
              >
                <img src={product.image} alt={product.name} />
                <div className="ai-product-info">
                  <h4>{product.name}</h4>
                  <p>₹ {product.price}</p>
                  <span>View Product →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="ai-modal-footer">
        <input
          type="text"
          placeholder="Describe your occasion..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={() => handleSend()}>
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default AIStylistModal;
