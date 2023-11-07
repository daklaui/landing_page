'use client'


import { useUser } from "@auth0/nextjs-auth0/client"
import { Content } from "./Layout/content"
import { NavBar } from "./Layout/navbar"
import CustomTextCarousel from "./components/Carousel"
import { Card } from "./components/card"
import RenderTextWithIcon from "./components/textWithIcon"
import { items } from "./mock/data"
import UploadFile from "./components/uploadFile"




export default function Index() {
  const { user, error, isLoading } = useUser();
  return (
    <div>
      <NavBar />
      <Content>
        <div className="grid gap-8 xl:gap-16 grid-cols-1 xl:grid-cols-2">
          <Card videoUrl='https://www.youtube.com/watch?v=U9rAmaxdvNw' />
          {user && (
            <Card gradientColor content={<UploadFile />
            } />)}

          <Card content={
            <CustomTextCarousel slides={items} />} />
          <Card inverseGradientColor content={<RenderTextWithIcon firstText='Create CV with AI' />} />

        </div>


      </Content>
    </div>

  )
}
