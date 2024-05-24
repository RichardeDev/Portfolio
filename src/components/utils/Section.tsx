import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Section = (props: PropsWithChildren<{className?: string, id?: string}>) => {
  return (
    // <section className={cn("max-w-4xl px-4 m-auto", props.className)}>
    <section className={cn("container px-8 m-auto", props.className)} id={props.id}>
        {props.children}
    </section>
  )
}
