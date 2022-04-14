import { render, screen } from '@testing-library/react'
import Home from '../../pages'

jest.mock('next/router')
jest.mock('next-auth/react', ()=> {
    return {
        useSession: () => [null, false]
    }
})

describe('Home page', () => {
    it('renders correctly', () => {


        render (<Home product={{priceid: 'faje-price-id', amount: 'RS10,00'}}/>)

        expect(screen.getByText('for RS10,00 mouth')).toBeInTheDocument()
    })
})