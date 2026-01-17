
"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

import { PRODUCTS } from "@/lib/mock-data"
import Link from "next/link"

// Reuse shared data
const MOCK_DB = PRODUCTS

export function SearchDialog({ buttonOnly = false }: { buttonOnly?: boolean }) {
    const [query, setQuery] = React.useState("")
    const [results, setResults] = React.useState<typeof MOCK_DB>([])
    const [hasSearched, setHasSearched] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (!query) return

        const lowerQuery = query.toLowerCase()

        // 1. Check for Section Navigation
        const sections = {
            "pricing": "pricing",
            "plan": "pricing",
            "cost": "pricing",
            "calculator": "calculator",
            "profit": "calculator",
            "help": "help",
            "faq": "help",
            "support": "help",
            "data": "data",
            "methodology": "data",
            "trends": "trends"
        }

        for (const [key, id] of Object.entries(sections)) {
            if (lowerQuery.includes(key)) {
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                    setOpen(false)
                    return
                }
            }
        }

        // 2. Product Search
        const filtered = MOCK_DB.filter(item =>
            item.name.toLowerCase().includes(lowerQuery) ||
            item.category.toLowerCase().includes(lowerQuery)
        )
        setResults(filtered)
        setHasSearched(true)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {buttonOnly ? (
                    <button className="hidden md:flex p-2 hover:bg-muted rounded-full text-muted-foreground transition-colors hover:text-foreground">
                        <Search className="h-5 w-5" />
                    </button>
                ) : (
                    <div className="relative w-full max-w-lg cursor-text">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search any product (e.g. iPhone, Nike)..."
                            className="pl-10 h-11 bg-background/50 border-input text-foreground font-mono text-sm w-full"
                            readOnly
                        />
                    </div>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-background border-border text-foreground">
                <DialogHeader>
                    <DialogTitle>Product Database Search</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSearch} className="flex gap-2 my-4">
                    <Input
                        placeholder="Product name..."
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                            setHasSearched(false)
                        }}
                        className="flex-1"
                        autoFocus
                    />
                    <Button type="submit">Search</Button>
                </form>

                <div className="space-y-4">
                    {hasSearched && results.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                            <div className="text-4xl mb-2">😕</div>
                            <p>Product not found.</p>
                            <p className="text-xs mt-1">Try "iPhone" or "Nike"</p>
                        </div>
                    )}

                    {results.map((item, i) => (
                        <Link
                            key={item.id}
                            href={`/product/${item.id}`}
                            onClick={() => setOpen(false)}
                            className="flex justify-between items-center p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer group"
                        >
                            <div>
                                <div className="font-bold group-hover:text-primary transition-colors">{item.name}</div>
                                <div className="text-xs text-muted-foreground">{item.category}</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-sm font-mono text-foreground">${item.retailPrice}</div>
                                <Badge variant="outline" className="text-primary border-primary/30">Tracked</Badge>
                            </div>
                        </Link>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}
