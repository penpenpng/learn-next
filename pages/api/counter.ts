import { NextApiRequest, NextApiResponse } from "next";
import { getValue } from "../../lib/volatile-counter";

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ value: getValue() });
};
