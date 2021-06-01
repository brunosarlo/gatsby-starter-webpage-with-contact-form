import React from "react"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <main className="flex flex-col justify-around flex-grow max-w-4xl mx-auto">
        <img className="p-4" src="https://placeholder.pics/svg/480x480" alt="Image paceholder" />
      </main>
    </Layout>
  )
}