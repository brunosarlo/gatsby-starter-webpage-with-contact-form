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
        <title>About me</title>
      </Helmet>
      <main className="flex grid flex-col justify-around flex-grow grid-cols-1 gap-4 py-10 pt-32 lg:grid-cols-12 lg:gap-8">
        <HeaderSection>
          <Block block={{ 
            colour: "primary",
            img : "https://placeholder.pics/svg/480x480",
            img_alt : "Image paceholder",
            alignLeft : false
                          }}>
            <h3 className="font-bold prose lg:text-2xl lg:py-4 md:text-xl sm:text-lg">
            This is just another example page heading.

            </h3>
            <p>And some more text...</p>
          </Block>
        </HeaderSection>
        <Section section = {{
          colour : "green",
          title : "More about me..."
        }}>
          <Block block={{ 
            img : "https://placeholder.pics/svg/480x480",
            img_alt : "Image paceholder",
            alignLeft : false
                          }}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat lectus neque, id sagittis sapien ultricies sit amet. Maecenas placerat euismod dui, in iaculis dolor tincidunt eu. Cras diam eros, dignissim efficitur dapibus sit amet, pharetra et velit. Suspendisse congue, orci ut tincidunt mattis, est nunc feugiat urna, quis tempor risus mauris hendrerit leo. Suspendisse quis elit ex. Vestibulum velit diam, maximus id placerat in, accumsan non metus. Praesent gravida mattis sem, vel dictum lectus dictum eget. Donec rhoncus orci id neque cursus, eget eleifend lectus interdum. Sed sodales neque vitae lacinia dignissim. Suspendisse iaculis eros eget pharetra malesuada. 
            </p>
          </Block>

          <Block block={{ 
            img : "https://placeholder.pics/svg/480x480",
            img_alt : "Image paceholder",
            alignLeft : true
                          }}>
            <p>
            Sed tincidunt dapibus diam, et viverra turpis euismod sed. Vivamus rhoncus, est id efficitur interdum, ante lectus posuere eros, id feugiat leo sem vel libero. Etiam consectetur tristique magna, et scelerisque metus varius in. Duis sed lectus sed ante scelerisque aliquet. Maecenas ac eros et nisl fringilla aliquet. Duis non venenatis nulla, ac volutpat augue. Quisque suscipit interdum tincidunt. Praesent sit amet enim diam. Praesent vel turpis imperdiet, facilisis enim ut, imperdiet neque. Aenean scelerisque tellus eu lectus suscipit posuere. Nullam pretium diam et augue varius, at imperdiet magna malesuada. Etiam at egestas ipsum, eget convallis augue. 
            </p>
          </Block>


        </Section>

      </main>
    </Layout>
  )
}