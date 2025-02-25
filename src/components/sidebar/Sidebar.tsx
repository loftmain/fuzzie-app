"use client"
import { Home, Settings, User, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

const menuItems = [
    { icon: Home, label: '대시보드', href: '/dashboard' },
    { icon: User, label: '콘솔', href: '/console' },
    { icon: Settings, label: '설정', href: '/settings' },
]

export function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div
            className={cn(
                "fixed left-0 top-0 h-screen bg-black/40 transition-all duration-300 ease-in-out",
                isExpanded ? "w-52" : "w-14"
            )}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className="flex flex-col items-center py-4">
                <Button variant="ghost" size="icon" className="mb-8">
                    <Menu className="h-6 w-6" />
                </Button>

                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href} className="w-full">
                        <Button
                            variant="ghost"
                            className={cn(
                                "relative flex items-center w-full py-2 mb-2",
                            )}
                        >
                            <div className="absolute left-4 flex w-6">
                                <item.icon className="h-5 w-5 mx-auto" />
                            </div>
                            <span
                                className={cn(
                                    "absolute left-12 transition-all duration-100",
                                    isExpanded ? "opacity-100" : "opacity-0"
                                )}
                            >
                                {item.label}
                            </span>
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    )
}
