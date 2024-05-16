import React from 'react'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ProductWrapper from '@/components/product-wrapper/ProductWrapper'
import Main from '@/components/main/Main'

async function getData() {
  const res = await fetch('https://dummyjson.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Product() {
  let data = await getData()


  return <main>
    < Header />
    <div className="container">
      <Main />
      <ProductWrapper data={data} />
    </div>
    <Footer />
  </main>
}
