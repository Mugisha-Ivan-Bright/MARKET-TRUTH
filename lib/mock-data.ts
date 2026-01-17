
export interface Product {
    id: string; // url-friendly slug
    name: string;
    category: string;
    retailPrice: number;
    wholesalePrice: number;
    description: string;
    trendScore: number; // 0-100 indicating popularity
}

export const PRODUCTS: Product[] = [
    {
        id: "iphone-15-pro",
        name: "iPhone 15 Pro",
        category: "Electronics",
        retailPrice: 999,
        wholesalePrice: 840,
        description: "Latest Apple flagship with titanium design and A17 Pro chip. High demand in Tier 1 cities.",
        trendScore: 98
    },
    {
        id: "ps5-slim",
        name: "PlayStation 5 Slim",
        category: "Gaming",
        retailPrice: 499,
        wholesalePrice: 425,
        description: "Smaller form factor of the popular console. Consistent demand throughout the year, peaking in Q4.",
        trendScore: 92
    },
    {
        id: "nintendo-switch-oled",
        name: "Nintendo Switch OLED",
        category: "Gaming",
        retailPrice: 349,
        wholesalePrice: 290,
        description: "The definitive Switch experience with a vibrant 7-inch OLED screen. Evergreen seller.",
        trendScore: 85
    },
    {
        id: "nike-jordan-1-retro",
        name: "Nike Air Jordan 1 Retro",
        category: "Footwear",
        retailPrice: 180,
        wholesalePrice: 95,
        description: "Iconic silhouette. Resale value fluctuates heavily based on colorway rarity.",
        trendScore: 94
    },
    {
        id: "macbook-air-m3",
        name: "MacBook Air M3",
        category: "Computers",
        retailPrice: 1099,
        wholesalePrice: 920,
        description: "Supercharged by the M3 chip. The world's most popular laptop for students and professionals.",
        trendScore: 88
    },
    {
        id: "dyson-airwrap",
        name: "Dyson Airwrap",
        category: "Beauty",
        retailPrice: 599,
        wholesalePrice: 450,
        description: "Multi-styler complete long. High margin potential due to premium brand positioning.",
        trendScore: 91
    },
    {
        id: "stanley-quencher",
        name: "Stanley Quencher H2.0",
        category: "Home",
        retailPrice: 45,
        wholesalePrice: 22,
        description: "Viral tumbler cup. Extremely high volume, lower margin per unit but fast turnover.",
        trendScore: 99
    }
]
