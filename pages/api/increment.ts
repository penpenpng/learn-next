import { NextApiRequest, NextApiResponse } from "next";
import { increment } from "../../lib/volatile-counter";

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ ok: true, value: increment() });
};
