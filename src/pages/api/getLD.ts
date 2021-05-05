import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const URL = `https://ldstats.info/api/authors/none/only/hoichael`;

    const response = await axios.get(URL);
    res.status(200).send({ data: response.data })
}


