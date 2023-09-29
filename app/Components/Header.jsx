"use client"

import Link from "next/link"
import { ConnectButton } from "@web3uikit/web3"

export default function Header() {
  return (
    <main className="flex items-center justify-between p-8">
        <h1 className="text-xl">Nft Marketplace</h1>
        <Link href="/sell">Sell</Link>
        <ConnectButton moralisAuth={false} />
    </main>
  )
}