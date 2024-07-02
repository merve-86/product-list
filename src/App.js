import Header from "./components/Header/Header";
import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import "./style.css"



function App(){
  const [selectedCategori, SetSelectedCategori] = useState("all")
  return (
    <div className="App">
      <Header clickChange={SetSelectedCategori}/>
      <ProductCard kategori={selectedCategori}/>
    </div>    
  );
}

export default App;











