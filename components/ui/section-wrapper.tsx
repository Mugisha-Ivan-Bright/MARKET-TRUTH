
"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionWrapper({
    children,
    className,
    id
}: {
    children: ReactNode
    className?: string
    id?: string
}) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("relative", className)}
        >
            {children}
        </motion.section>
    )
}
