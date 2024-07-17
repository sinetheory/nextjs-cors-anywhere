import NextCors from 'nextjs-cors'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const regex = /\s+(href|src)=['"](.*?)['"]/g

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query

  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const rdata = await fetch(String(url), requestOptions).then((response) => response.text())

    return res.send(rdata)
  } catch (e) {
    console.log('error', e)
    return res.send(e)
  }
}

export default handler;