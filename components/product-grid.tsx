
"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface Product {
    id: number
    name: string
    category: string
    brand: string
    retail: number
    wholesaleMin: number
    wholesaleMax: number
    image: string
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "iPhone 15 Pro 256GB",
        category: "Electronics",
        brand: "Apple",
        retail: 1199,
        wholesaleMin: 780,
        wholesaleMax: 850,
        image: "https://images.macrumors.com/t/1H8_f1NDpDZNQEfcvKSJWa5oLFA=/1600x/article-new/2023/09/iphone-15-pro-lineup-9-1.jpg" // Accessible Apple product photo
    },
    {
        id: 2,
        name: "Air Force 1 '07",
        category: "Footwear",
        brand: "Nike",
        retail: 115,
        wholesaleMin: 55,
        wholesaleMax: 62,
        image: "https://static.nike.com/a/images/t_default/5e38308c-a4c1-43f1-9cb1-0921fb4f75fa/air-force-1-07-mens-shoes.png" // Official Nike Air Force 1 image
    },
    {
        id: 3,
        name: "PlayStation 5 Slim",
        category: "Gaming",
        brand: "Sony",
        retail: 499,
        wholesaleMin: 380,
        wholesaleMax: 410,
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6512/6512831_sd.jpg" // Best Buy product image for PS5 Slim
    },
    {
        id: 4,
        name: "Seamaster Diver 300M",
        category: "Watches",
        brand: "Omega",
        retail: 5900,
        wholesaleMin: 3200,
        wholesaleMax: 3600,
        image: "https://www.finks.com/products/omega-seamaster-diver-300m-omega-co-axial-master-chronometer-42mm-with-white-dial-210-30-42-20-04-001.jpg" // Omega Seamaster product image
    },
    {
        id: 5,
        name: "Yeezy Boost 350 V2",
        category: "Footwear",
        brand: "Adidas",
        retail: 230,
        wholesaleMin: 110,
        wholesaleMax: 130,
        image: "https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Core-Black-Red-Product.jpg" // StockX real sneaker photo
    },
    {
        id: 6,
        name: "Dyson Airwrap",
        category: "Beauty",
        brand: "Dyson",
        retail: 599,
        wholesaleMin: 320,
        wholesaleMax: 350,
        image: "https://nfm.com/dyson-airwrap-multi-styler-complete-long-62662887/62662887.jpg" // Dyson Airwrap Multi‑Styler product image
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export function ProductGrid() {
    return (
        <section className="bg-background py-12 md:py-20 border-t border-border">
            <div className="container px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-foreground">Trending Analyses</h2>
                    <Link href="/signup" className="text-sm font-medium text-primary cursor-pointer hover:underline">
                        View All Trends →
                    </Link>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {PRODUCTS.map((product) => {
                        const avgWholesale = (product.wholesaleMin + product.wholesaleMax) / 2
                        const markup = ((product.retail - avgWholesale) / avgWholesale) * 100
                        const isHighMarkup = markup > 70
                        const isFairMarkup = markup < 40

                        // Dynamic color classes based on theme
                        // In dark mode, we want subtle backgrounds for badges
                        const badgeClass = isHighMarkup
                            ? "bg-red-900/20 text-red-500 border-red-900/50"
                            : isFairMarkup
                                ? "bg-green-900/20 text-green-500 border-green-900/50"
                                : "bg-yellow-900/20 text-yellow-500 border-yellow-900/50"

                        return (
                            <motion.div key={product.id} variants={item} className={"transform transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl"}>
                                <Card className="bg-card border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="flex p-4 gap-4">
                                        <div className="h-24 w-24 flex-shrink-0 bg-muted rounded-md overflow-hidden">
                                            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-bold text-lg leading-tight text-foreground">{product.name}</h3>
                                            <p className="text-sm text-muted-foreground">{product.category} • {product.brand}</p>
                                        </div>
                                    </div>

                                    <div className="px-4 py-2 border-t border-dashed border-border/60 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-muted-foreground">Retail Price</span>
                                            <span className="font-mono font-bold text-foreground text-lg">${product.retail.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-muted/40 p-2 rounded">
                                            <span className="text-sm text-secondary-foreground font-medium">Wholesale Est.</span>
                                            <span className="font-mono font-medium text-secondary-foreground">${product.wholesaleMin}-${product.wholesaleMax}</span>
                                        </div>
                                    </div>

                                    <div className="px-4 py-4 flex items-center justify-between border-t border-border">
                                        <Badge className={`rounded-md font-mono ${badgeClass} border`} variant="outline">
                                            Markup: {Math.round(markup)}%
                                        </Badge>

                                        <Link href="/signup" className="text-sm font-medium text-primary flex items-center hover:underline">
                                            View Analysis <ArrowRight className="ml-1 h-3 w-3" />
                                        </Link>
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
