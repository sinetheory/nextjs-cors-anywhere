import { NextApiRequest, NextApiResponse } from 'next'
const Humanoid = require("humanoid-js")

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query

  try {
    const humanoid = new Humanoid();
    const rdata = await humanoid.sendRequest(String(url)).then(res => res.body)

    return res.send(rdata)
  } catch (e) {
    console.log('error', e)
    return res.send(e)
  }
}

export default handler;