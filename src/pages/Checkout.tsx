import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CreditCard, Banknote, Smartphone, Truck, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "919226438833";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
      toast.error("Please fill all delivery details");
      return;
    }

    setLoading(true);

    try {
      // Save order to MongoDB via backend
      const res = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: formData.name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          pincode: formData.pincode,
          items: items.map((i) => ({
            name: i.name,
            weight: i.weight,
            price: i.price,
            quantity: i.quantity,
          })),
          totalPrice,
          paymentMethod,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to place order");
      }

      // Build WhatsApp message
      const orderItems = items
        .map((i) => `${i.name} x${i.quantity} (₹${i.price * i.quantity})`)
        .join("\n");

      const paymentLabel =
        paymentMethod === "cod" ? "Cash on Delivery" :
        paymentMethod === "upi" ? "UPI Payment" :
        paymentMethod === "card" ? "Card Payment" : "Bank Transfer";

      const message = encodeURIComponent(
        `🛒 *New Order - True Friends Foods*\n\n` +
        `*Items:*\n${orderItems}\n\n` +
        `*Total: ₹${totalPrice.toFixed(2)}*\n` +
        `*Payment: ${paymentLabel}*\n\n` +
        `*Delivery Details:*\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Address: ${formData.address}\n` +
        `City: ${formData.city}\n` +
        `Pincode: ${formData.pincode}`
      );

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
      toast.success("Order placed! Redirecting to WhatsApp...");
      clearCart();
      navigate("/");
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <p className="text-muted-foreground text-lg">Your cart is empty</p>
        <Button onClick={() => navigate("/")} variant="outline">
          <ArrowLeft size={16} className="mr-2" /> Back to Shop
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted py-8">
      <div className="container max-w-2xl">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={18} /> Back to Shop
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Checkout</h1>

        <form onSubmit={handleOrder} className="space-y-6">
          {/* Order Summary */}
          <div className="bg-card rounded-2xl p-5 shadow-sm space-y-3">
            <h2 className="font-bold text-lg text-foreground">Order Summary</h2>
            {items.map((item) => (
              <div key={item.name} className="flex justify-between items-center text-sm">
                <span className="text-foreground">
                  {item.name} <span className="text-muted-foreground">x{item.quantity}</span>
                </span>
                <span className="font-semibold text-foreground">₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-border pt-3 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-card rounded-2xl p-5 shadow-sm space-y-4">
            <h2 className="font-bold text-lg text-foreground flex items-center gap-2">
              <Truck size={20} className="text-primary" /> Delivery Location
            </h2>
            <div className="grid gap-3">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="House/Flat No., Street, Landmark" rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-card rounded-2xl p-5 shadow-sm space-y-4">
            <h2 className="font-bold text-lg text-foreground">Payment Method</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-colors">
                <RadioGroupItem value="cod" />
                <Banknote size={20} className="text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Cash on Delivery</p>
                  <p className="text-xs text-muted-foreground">Pay when you receive your order</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-colors">
                <RadioGroupItem value="upi" />
                <Smartphone size={20} className="text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">UPI Payment</p>
                  <p className="text-xs text-muted-foreground">GPay, PhonePe, Paytm, etc.</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-colors">
                <RadioGroupItem value="card" />
                <CreditCard size={20} className="text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Credit / Debit Card</p>
                  <p className="text-xs text-muted-foreground">Visa, Mastercard, RuPay</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-colors">
                <RadioGroupItem value="bank" />
                <Banknote size={20} className="text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Bank Transfer (NEFT/IMPS)</p>
                  <p className="text-xs text-muted-foreground">Direct bank transfer</p>
                </div>
              </label>
            </RadioGroup>
          </div>

          <Button type="submit" size="lg" className="w-full text-base" disabled={loading}>
            {loading ? (
              <><Loader2 size={18} className="mr-2 animate-spin" /> Placing Order...</>
            ) : (
              "Place Order via WhatsApp"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
