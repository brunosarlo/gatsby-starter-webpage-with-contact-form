import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import HeaderSection from "../components/HeaderSection"
import Section from "../components/Section"
import Block from "../components/Block"

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>My personal website</title>
      </Helmet>
      <main className="flex grid flex-col justify-around flex-grow grid-cols-1 gap-4 pt-32 pb-10 lg:grid-cols-12 lg:gap-8">
        <HeaderSection>
          <Block block={{ 
            colour: "primary",
            img : "https://placeholder.pics/svg/480x480",
            img_alt : "Image paceholder",
            alignLeft : false
                          }}>
            <h3 className="font-bold prose lg:text-2xl lg:py-4 md:text-xl sm:text-lg">
            Hi welcome to this gatsby starter template.
            </h3>
            <p>This template includes various blocks for easy develpment. You can asign a colour for each section.</p>
          </Block>
        </HeaderSection>
        <Section section = {{
          colour : "violet",
          title : "Work"
        }}>
          <Block block={{ 
            img : "https://placeholder.pics/svg/480x480",
            img_alt : "Image paceholder",
            alignLeft : true
                          }}>
            <p>This is a block, which includes an image, in this case aligned left.
            </p>
          </Block>

          <Block block={{ 
            img : "https://placeholder.pics/svg/480x480",
            img_alt : "Image paceholder",
            alignLeft : false
                          }}>
            <p>This is a block, which includes an image too, in this case aligned right.</p>
            
          </Block>
        </Section>

      </main>
    </Layout>
  )
}