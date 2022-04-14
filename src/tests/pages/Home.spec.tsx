import { render, screen } from '@testing-library/react'
import Home, {getStaticProps} from '../../pages'
import { stripe } from '../../services/stripe'
import { mocked } from 'ts-jest/utils'

jest.mock('next/router')
jest.mock('next-auth/react', ()=> {
    return {
        useSession: () => [null, false]
    }
})
jest.mock('../../services/stripe')

describe('Home page', () => {
    it('renders correctly', () => {


        render (<Home product={{priceid: 'faje-price-id', amount: 'RS10,00'}}/>)

        expect(screen.getByText('for RS10,00 mouth')).toBeInTheDocument()
    })
  
    it('loads initial data', async () => {
        const retriveStripeMocked = mocked(stripe.prices.retrieve)

        retriveStripeMocked.mockResolvedValueOnce({
            id: 'fake-price-id',
            unit_amount: 1000,
        } as any)
        const response = await getStaticProps({})

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    product: {
                        priceId: 'fake-price-id',
                        amount: '$10.00'
                    }
                }
            })
        )
        
    })
})