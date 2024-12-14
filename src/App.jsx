import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0); // حالة العداد
  const [showProduct, setShowProduct] = useState(false); // حالة عرض البيانات

  const increase = () => {
    setCounter(counter + 1);
  };

  const toggleProductDisplay = () => {
    setShowProduct(!showProduct); // تبديل حالة العرض
  };

  return (
    <div className="bg-success">
      <p>Counter: {counter}</p>
      <div>
        <button onClick={increase}>Increase</button>
      </div>
      <div className="dis">
        <button onClick={toggleProductDisplay}>
          {showProduct ? "Hide Product" : "Show Product"}
        </button>
        {showProduct && (
          <div>
            <p>Name: iPhone 14</p>
            <p>Price: $1200</p>
            <p>Description: Good iPhone</p>
          </div>
        )}
      </div>
    </div>
  );
}
