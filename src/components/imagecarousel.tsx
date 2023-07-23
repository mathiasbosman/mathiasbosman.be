import type { PropsWithChildren } from 'react'
import { type ReactElement } from 'react'
import type { HTMLImage } from '../shared/utils.tsx'

interface Props {
  images: HTMLImage[]
}

export const Imagecarousel = (props: PropsWithChildren<Props>): ReactElement => {
  return <div className={'mt-8 sm:mt-16'}>
    <div className={'-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'}>
      {props.images.map((img, i) => {
        const cssRotation = i % 2 === 0 ? '-rotate-2' : 'rotate-2'
        return <div key={i} className={cssRotation
          + ' md:aspect-[9/10] aspect-[0.5] md:w-72 sm:w-40 w-24 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800'}>
          <img alt={img.alt}
               src={img.src}
               loading={'lazy'} decoding={'async'}
               className={'inset-0 h-full w-full object-cover bg-zinc-100 dark:bg-zinc-800'}
               style={{ color: 'transparent' }}/>
        </div>
      })}
    </div>
  </div>
}

export default Imagecarousel
