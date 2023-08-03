import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function HomePage() {
  return (
    <>
      <h1 className={'title'}>
        Ir a <Link href={"/about"}>About</Link>
      </h1>
      <p className={'description'}>
        Get started by editing {' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </>
  )
}

HomePage.getLayout = function getLayout(page:JSX.Element) {
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
