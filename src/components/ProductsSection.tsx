import frenchFries from "@/assets/french-fries.jpg";
import greenPeas from "@/assets/green-peas.jpg";
import mixedVeg from "@/assets/mixed-veg.jpg";
import sweetCorn from "@/assets/sweet-corn.jpg";
import aamras from "@/assets/aamras.jpg";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const products = [
  { name: "French Fries", description: "Tasty & Crunchy. Ready in 3 minutes. Fry or Bake.", weight: "2.5 Kg", price: 299, image: frenchFries, tags: ["Tasty", "Crunchy"] },
  { name: "Frozen Green Peas", description: "100% Natural, No Added Preservatives. Premium Quality.", weight: "1 Kg", price: 149, image: greenPeas, tags: ["Natural", "Fresh"] },
  { name: "Frozen Mixed Vegetables", description: "Naturally Fresh, Naturally Healthy. No Added Colors or Salt.", weight: "500 gm", price: 129, image: mixedVeg, tags: ["Healthy", "No Preservatives"] },
  { name: "Frozen Sweet Corn", description: "Premium Quality. Natural & Fresh. Ready to cook.", weight: "1 Kg", price: 159, image: sweetCorn, tags: ["Premium", "Natural"] },
  { name: "Hapus Aamras", description: "100% Farm Fresh. Made from premium Alphonso mangoes.", weight: "1 Kg", price: 349, image: aamras, tags: ["Farm Fresh", "Premium"] },
];

const ProductsSection = () => {
  const { addToCart } = useCart();

  const handleAdd = (product: typeof products[0]) => {
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
              <div className="bg-accent/50 p-6 flex justify-center">
                <img src={product.image} alt={product.name} className="h-56 object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex gap-2">
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
                  <Button size="sm" onClick={() => handleAdd(product)} className="gap-1.5">
                    <ShoppingCart size={15} /> Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
