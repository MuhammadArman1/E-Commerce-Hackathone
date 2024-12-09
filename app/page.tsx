import Hero from '@/components/Hero'
import HomeProduct1, { HomeProduct2 } from '@/components/HomeProduct'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero/>
      <HomeProduct1/>
      <HomeProduct2/>
    </div>
  )
}
