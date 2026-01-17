
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, ArrowDown, ArrowUp, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const PRODUCTS = [
    {
        id: 1,
        name: "Tech Fleece Hoodie V2",
        retail: 120,
        wholesale: "55-65",
        trend: "up",
        fairPrice: 95,
        margin: "High",
        image: "https://images.unsplash.com/photo-1556906781-9a412961d289?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 2,
        name: "Retro High OG 'Heritage'",
        retail: 180,
        wholesale: "90-100",
        trend: "down",
        fairPrice: 140,
        margin: "Med",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 3,
        name: "Wireless ANC Headphones X",
        retail: 299,
        wholesale: "140-160",
        trend: "stable",
        fairPrice: 210,
        margin: "Very High",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400"
    }
]

export function TrendingGrid() {
    return (
        <section className="container px-4 py-8 md:py-12 lg:py-24 space-y-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="space-y-1">
                    <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
                    <p className="text-muted-foreground">Top products moving in the market today.</p>
                </div>
                <Button variant="ghost" className="text-primary hover:text-primary/90">
                    View All Trends <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PRODUCTS.map((product) => (
                    <Card key={product.id} className="group overflow-hidden border-muted/60 transition-all hover:border-primary/50 hover:shadow-md">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                            {/* Replace with Next/Image in real app */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <CardHeader className="p-4 pb-2">
                            <div className="flex items-start justify-between">
                                <div>
                                    <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                                    <div className="text-sm text-muted-foreground">Retail: ${product.retail}</div>
                                </div>
                                <Badge variant={product.trend === 'up' ? "default" : product.trend === 'down' ? "destructive" : "secondary"}>
                                    {product.trend === 'up' && <ArrowUp className="mr-1 h-3 w-3" />}
                                    {product.trend === 'down' && <ArrowDown className="mr-1 h-3 w-3" />}
                                    {product.trend === 'stable' && <Minus className="mr-1 h-3 w-3" />}
                                    {product.trend === 'up' ? "Heating Up" : product.trend === 'down' ? "Cooling" : "Stable"}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                            <div className="grid grid-cols-2 gap-2 rounded-lg bg-muted/50 p-3">
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Insider Cost</span>
                                    <div className="text-lg font-bold text-primary">${product.wholesale}</div>
                                </div>
                                <div className="space-y-1 border-l pl-3 border-border/50">
                                    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Markup</span>
                                    <div className="text-sm font-medium">Up to {Math.round((product.retail / parseInt(product.wholesale.split('-')[0]) - 1) * 100)}%</div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <div className="w-full text-xs text-center text-muted-foreground">
                                <span className="font-medium text-foreground">Fair Price: ${product.fairPrice}</span> • Good Deal Zone
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
