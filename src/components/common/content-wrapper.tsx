import type { PropsWithChildren} from 'react';
import { type ReactElement } from 'react'

export const ContentWrapper = (props: PropsWithChildren): ReactElement => {
  return <div className="mx-auto max-w-7xl lg:px-8 mt-12">
      <div className="relative px-4 sm:px-8 lg:px-12">
        {props.children}
      </div>
    </div>
}

export default ContentWrapper
