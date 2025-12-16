import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-cb50e858/health", (c) => {
  return c.json({ status: "ok" });
});

// Get all products
app.get("/make-server-cb50e858/products", async (c) => {
  try {
    const products = await kv.getByPrefix("product:");
    return c.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return c.json({ error: "Failed to fetch products" }, 500);
  }
});

// Get single product
app.get("/make-server-cb50e858/products/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const product = await kv.get(`product:${id}`);
    
    if (!product) {
      return c.json({ error: "Product not found" }, 404);
    }
    
    return c.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return c.json({ error: "Failed to fetch product" }, 500);
  }
});

// Create or update product
app.post("/make-server-cb50e858/products", async (c) => {
  try {
    const product = await c.req.json();
    
    if (!product.id) {
      return c.json({ error: "Product ID is required" }, 400);
    }
    
    await kv.set(`product:${product.id}`, product);
    return c.json({ success: true, product });
  } catch (error) {
    console.error("Error creating/updating product:", error);
    return c.json({ error: "Failed to create/update product" }, 500);
  }
});

// Delete product
app.delete("/make-server-cb50e858/products/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`product:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting product:", error);
    return c.json({ error: "Failed to delete product" }, 500);
  }
});

Deno.serve(app.fetch);