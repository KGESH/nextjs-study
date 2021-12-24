// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function signupHandler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data = req.body;
    if (req.method === 'POST') {
        fetch('http://localhost:3000/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response)=>response.json())
            .then((result)=>
            res.status(201).send(result)
        )
    }
}
