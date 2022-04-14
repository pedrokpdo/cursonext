import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Async } from '.'

test('Its renders correctly', async () => {
    render(<Async />)
    
    expect(screen.getByText('Hello Word')).toBeInTheDocument()
    
  //  await waitForElementToBeRemoved(screen.queryByText)

    await waitFor(() => {
    expect(screen.queryByText('Button')).not.toBeInTheDocument()
        
    })
})