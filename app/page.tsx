"use client"

import "./styles.css"
import ImageCard from "@/components/ui/image-card";
import { ScrollArea } from '@/components/ui/scroll-area'


export default function Home() {

  return (
    <div className="relative min-h-screen">
      <div className="main">
        <ImageCard
          imageUrl="/ya.jpg"
          caption="Привет! Я разработчик, энтузиаст и просто Ваня."
        />
        <ScrollArea className="rounded-base h-[200px] w-[350px] text-main-foreground border-2 border-border bg-main p-4 shadow-shadow">
          Слева ссылки на мои социальные сети и мой GitHub.

        </ScrollArea>
      </div>
      
      
  
      
      
      <div className="leftbar">
        <a href="https://vk.com/nosikow" target="_blank" rel="noopener noreferrer">
          <div className="buttonvk">
            <div className="textvk"> VK </div>
          </div>
        </a>

        <a href="https://t.me/nosikow" target="_blank" rel="noopener noreferrer">
          <div className="buttonTG">
            <div className="textTg"> Telegram </div>
          </div>
        </a>
  
    
        <a href="https://github.com/NosikovNeOleg" target="_blank" rel="noopener noreferrer">
          <div className="buttonGIT">
            <div className="textgit"> GitHub </div>
          </div>
        </a>
      </div>
    </div>
  )
}
