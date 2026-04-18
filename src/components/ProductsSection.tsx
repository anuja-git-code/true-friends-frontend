import frenchFries from "@/assets/french-fries.jpg";
import greenPeas from "@/assets/green-peas.jpg";
import mixedVeg from "@/assets/mixed-veg.jpg";
import sweetCorn from "@/assets/sweet-corn.jpg";
import aamras from "@/assets/aamras.jpg";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Info } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface Product {
  name: string;
  description: string;
  weight: string;
  price: number;
  image: string;
  tags: string[];
  ingredients: string;
  storage: string;
  shelfLife: string;
  nutrition: { label: string; value: string }[];
  cookingTip: string;
}

const products: Product[] = [
  {
    name: "French Fries",
    description: "Tasty & Crunchy. Ready in 3 minutes. Fry or Bake.",
    weight: "2.5 Kg",
    price: 200,
    image: frenchFries,
    tags: ["Tasty", "Crunchy"],
    ingredients: "Potato, Palmolein Oil",
    storage: "Keep Frozen at 0°F (-18°C) or below for best quality.",
    shelfLife: "Best before 12 months from date of packaging",
    cookingTip: "Deep fry directly from freezer at 175°C for 3 min. OR bake at 220°C for 18–20 min. Do not thaw before cooking.",
    nutrition: [
      { label: "Energy", value: "143 kcal per 100g" },
      { label: "Protein", value: "2.8g" },
      { label: "Carbohydrates", value: "24.61g" },
      { label: "Total Fat", value: "3.54g" },
      { label: "Sodium", value: "32mg" },
    ],
  },
  {
    name: "Frozen Green Peas",
    description: "100% Natural, No Added Preservatives. Premium Quality.",
    weight: "1 Kg",
    price: 60,
    image: greenPeas,
    tags: ["100% Natural", "No Preservatives"],
    ingredients: "Green Peas",
    storage: "Store below -18°C. Do not refreeze once thawed.",
    shelfLife: "Best before 12 months from date of packaging",
    cookingTip: "Ready to cook directly from frozen. Boil, stir fry or add to curries.",
    nutrition: [
      { label: "Energy", value: "77 kcal per 100g" },
      { label: "Protein", value: "5.21%" },
      { label: "Carbohydrates", value: "13.71%" },
      { label: "Dietary Fibre", value: "4.29%" },
      { label: "Vitamin C", value: "18mg" },
      { label: "Calcium", value: "22mg" },
    ],
  },
  {
    name: "Frozen Mix Veggies",
    description: "Naturally Fresh, Naturally Healthy. No Added Colors or Salt.",
    weight: "500 gm",
    price: 67,
    image: mixedVeg,
    tags: ["No Added Colors", "Ready to Cook"],
    ingredients: "Carrot, Bean, Green Peas, Cauliflower",
    storage: "Always keep at -18°C. Keep in freezer once pack is opened.",
    shelfLife: "Best before 12 months from date of packaging",
    cookingTip: "Remove from freezer, wash with running water for a few seconds, then cook as required. Do not refreeze once thawed.",
    nutrition: [
      { label: "Energy", value: "49 kcal per 100g" },
      { label: "Protein", value: "3.00g" },
      { label: "Carbohydrates", value: "9.00g" },
      { label: "Total Fat", value: "0.10g" },
      { label: "Total Sugars", value: "3.00g" },
    ],
  },
  {
    name: "Frozen Sweet Corn",
    description: "Premium Quality. Natural & Fresh. Ready to cook.",
    weight: "1 Kg",
    price: 52,
    image: sweetCorn,
    tags: ["Premium", "Natural"],
    ingredients: "Sweet Corn",
    storage: "Keep frozen at -18°C or below.",
    shelfLife: "Best before 12 months from date of packaging",
    cookingTip: "Cook directly from frozen. Boil for 3–5 min or microwave. Perfect for salads, soups and stir fries.",
    nutrition: [
      { label: "Energy", value: "86 kcal per 100g" },
      { label: "Protein", value: "3.2g" },
      { label: "Carbohydrates", value: "19g" },
      { label: "Total Fat", value: "1.2g" },
      { label: "Dietary Fibre", value: "2.7g" },
    ],
  },
  {
    name: "Hapus Aamras",
    description: "100% Farm Fresh. Made from premium Alphonso mangoes.",
    weight: "1 Kg",
    price: 140,
    image: aamras,
    tags: ["Farm Fresh", "Alphonso"],
    ingredients: "100% Alphonso Mango Pulp",
    storage: "Keep frozen at -18°C. Once opened, consume within 2 days.",
    shelfLife: "Best before 12 months from date of packaging",
    cookingTip: "Thaw in refrigerator before serving. Serve chilled with puri or as a dessert. Do not refreeze.",
    nutrition: [
      { label: "Energy", value: "70 kcal per 100g" },
      { label: "Protein", value: "0.5g" },
      { label: "Carbohydrates", value: "17g" },
      { label: "Total Fat", value: "0.3g" },
      { label: "Vitamin C", value: "27mg" },
    ],
  },
];

const ProductsSection = () => {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState<Product | null>(null);

  const handleAdd = (product: Product) => {
    addToCart({ name: product.name, image: product.image, weight: product.weight, price: product.price });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <section id="products" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Range</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Premium Frozen Products</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Quality you can trust, taste you will love. All products are carefully processed to retain freshness and nutrition.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div
                className="bg-accent/50 p-6 flex justify-center cursor-pointer"
                onClick={() => setSelected(product)}
              >
                <img src={product.image} alt={product.name} className="h-56 object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex gap-2 flex-wrap">
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-accent text-accent-foreground px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-primary font-bold text-lg">₹{product.price}</p>
                    <p className="text-muted-foreground text-xs">Net Qty: {product.weight}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => setSelected(product)} className="gap-1.5">
                      <Info size={14} /> Details
                    </Button>
                    <Button size="sm" onClick={() => handleAdd(product)} className="gap-1.5">
                      <ShoppingCart size={15} /> Add
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <div className="bg-accent/50 p-6 flex justify-center rounded-t-2xl">
                <img src={selected.image} alt={selected.name} className="h-48 object-contain" />
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{selected.name}</h2>
                  <p className="text-muted-foreground text-sm">Net Qty: {selected.weight}</p>
                </div>
                <p className="text-primary font-bold text-2xl">₹{selected.price}</p>
              </div>

              <div className="flex gap-2 flex-wrap">
                {selected.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-accent text-accent-foreground px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              {/* Ingredients */}
              <div className="bg-muted rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-1">🥗 Ingredients</p>
                <p className="text-sm text-muted-foreground">{selected.ingredients}</p>
              </div>

              {/* Cooking Tip */}
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="text-sm font-semibold text-green-800 mb-1">👨‍🍳 How to Cook</p>
                <p className="text-sm text-green-700">{selected.cookingTip}</p>
              </div>

              {/* Nutrition */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">📊 Nutritional Info</p>
                <div className="rounded-xl overflow-hidden border border-border">
                  {selected.nutrition.map((n, i) => (
                    <div key={n.label} className={`flex justify-between px-4 py-2 text-sm ${i % 2 === 0 ? "bg-muted" : "bg-card"}`}>
                      <span className="text-muted-foreground">{n.label}</span>
                      <span className="font-medium text-foreground">{n.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Storage & Shelf Life */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm font-semibold text-blue-800 mb-1">❄️ Storage</p>
                <p className="text-sm text-blue-700">{selected.storage}</p>
                <p className="text-xs text-blue-600 mt-1">{selected.shelfLife}</p>
              </div>

              <Button className="w-full gap-2" size="lg" onClick={() => { handleAdd(selected); setSelected(null); }}>
                <ShoppingCart size={18} /> Add to Cart — ₹{selected.price}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
