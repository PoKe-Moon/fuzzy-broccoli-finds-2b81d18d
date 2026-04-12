import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, TrendingDown, ShoppingBag, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground">Product not found</p>
        <Link to="/search">
          <Button variant="outline" className="mt-4">Back to Search</Button>
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container py-8">
      <Link to="/search" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to results
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square rounded-xl overflow-hidden bg-muted"
        >
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{product.brand}</p>
            <h1 className="font-display text-3xl font-bold mt-1">{product.name}</h1>
          </div>

          {product.originalProduct && (
            <div className="rounded-lg bg-muted/60 p-4 space-y-1">
              <p className="text-xs font-medium text-muted-foreground uppercase">Dupe for</p>
              <p className="font-medium">{product.originalBrand} — {product.originalProduct}</p>
              <p className="text-sm text-muted-foreground">Original price: ${product.originalPrice?.toFixed(2)}</p>
            </div>
          )}

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
            {product.savings && (
              <Badge className="bg-primary text-primary-foreground gap-1">
                <TrendingDown className="h-3 w-3" /> Save ${product.savings.toFixed(0)}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews.toLocaleString()} reviews)</span>
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="capitalize">{tag}</Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <Button size="lg" className="flex-1 gap-2 gradient-primary text-primary-foreground border-0 hover:opacity-90">
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold mb-6">Similar Dupes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
