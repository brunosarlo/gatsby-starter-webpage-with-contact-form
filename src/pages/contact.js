import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import HeaderSection from "../components/HeaderSection"
import Block from "../components/Block"
import Form from '../components/Form';

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <main className="flex grid flex-col justify-around flex-grow grid-cols-1 gap-4 pt-32 pb-10 lg:grid-cols-12 lg:gap-8">
        <HeaderSection>
          <div className="flex grid col-span-12 mt-4 sm:mx-6 md:mx-8 sm:flex sm:items-center md:col-span-12 lg:col-span-8 lg:col-start-3">
              <p class="flex-1 p-4 prose text-white lg:p-6 md:text-xl sm:text-lg ">
              This is the contact form, with React front end and PHP at the server side.
                            </p>
          </div>
          <Block block={{
            colour: "primary",
            img: "https://placeholder.pics/svg/480x480",
            img_alt: "Image placeholder",
            alignLeft: false
          }}>

          <Form />
          </Block>
        </HeaderSection>

      </main>
    </Layout>
  )
}