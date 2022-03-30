import {NextApiRequest , NextApiResponse} from 'next'

export default (request : NextApiRequest, response:NextApiResponse) => {
    const users = [
        {id:1, name:'pedro'},
        {id:2, name:'paula'},
        {id:3, name:'gustavo'},
    ]
    return response.json(users)
}