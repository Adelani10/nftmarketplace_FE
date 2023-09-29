"use client"
import Header from './Components/Header'
import { MoralisProvider } from 'react-moralis'

export default function Home() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <main className="container mx-auto border min-h-screen">

        <Header/>
      </main>
    </MoralisProvider>
  )
}
