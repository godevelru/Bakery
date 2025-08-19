
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import Franchise from "./pages/Franchise";
import Careers from "./pages/Careers";
import Wholesale from "./pages/Wholesale";
import Catering from "./pages/Catering";
import MasterClasses from "./pages/MasterClasses";
import Loyalty from "./pages/Loyalty";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Promotions from "./pages/Promotions";
import Nutrition from "./pages/Nutrition";
import OrderTracking from "./pages/OrderTracking";
import GiftCards from "./pages/GiftCards";
import Sustainability from "./pages/Sustainability";
import Events from "./pages/Events";
import Partnership from "./pages/Partnership";
import Quality from "./pages/Quality";
import Suppliers from "./pages/Suppliers";
import Press from "./pages/Press";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/master-classes" element={<MasterClasses />} />
            <Route path="/loyalty" element={<Loyalty />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/events" element={<Events />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/press" element={<Press />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
