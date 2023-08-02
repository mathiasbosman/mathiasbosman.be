import Page from '@components/common/page'
import ContentWrapper from '@components/common/content-wrapper'
import PageTitle from '@components/typography/page-title'
import type { ReactElement } from 'react'

export const ErrorPage = (): ReactElement => {
  return <Page title={'404 - Mathias Bosman'}
               renderAvatar={true}>
    <ContentWrapper>
      <div className={'relative px-2 sm:px-8 lg:px-12 mt-32'}>
        <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
          <PageTitle title={'404 - not found'}/>
          <p className={'mt-6 text-base text-zinc-500 dark:text-zinc-400'}>
            This is not the page you are looking for!
          </p>
        </div>
      </div>
    </ContentWrapper>
  </Page>
}

export default ErrorPage
