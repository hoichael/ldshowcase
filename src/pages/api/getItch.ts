import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const URL = `https://itch.io/api/1/${process.env.ITCH_KEY}/my-games`;

    const response = await axios.get(URL);
    res.status(200).send({ data: response.data })
}
