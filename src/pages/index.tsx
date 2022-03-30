import styles from './home.module.scss'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

interface HomeProps {
  product: {
    priceid: string;
    amount: number;
  }
}
export default function Home({product}: HomeProps )  {
  return (
    <>
      <Head>
        <title>Home Ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome</span>
          <h1>Newes about the <span>React</span> Word</h1>
          <p>
            Get acess to all publications <br />
            <span>for {product.amount} mouth</span>
          </p>
          <SubscribeButton priceId={product.priceid}/>
        </section>
        <img src="/images/avatar.svg" alt="Girls Coding" />
      </main>
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async () => {
const price = await stripe.prices.retrieve ('price_1Kij0sGJf8p0ErhrvmfBmD33', {
  
} )
const product = {
  priceId: price.id,
  amount: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price.unit_amount / 100)
} 

  return {
  props: {
    product,
  }
}
}