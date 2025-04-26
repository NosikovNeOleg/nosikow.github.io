import { cn } from "@/lib/utils"

type Props = {
  imageUrl: string
  caption: string
  subCaption: string
  className?: string
}

export default function ImageCard({ imageUrl, caption, subCaption,  className }: Props) {
  return (
    <figure
      className={cn(
        "w-[300px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow",
        className,
      )}
    >
      <img className="w-full aspect-1/1" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-main-foreground border-border p-4">
        {caption}
      </figcaption>
      <figcaption className="text-main-foreground p-4">
        {subCaption}
      </figcaption>
    </figure>
  )
}
