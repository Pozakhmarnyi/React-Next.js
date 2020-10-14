import { NextApiRequest, NextApiResponse } from "next";

interface YourNextApiRequest extends NextApiRequest {
  query: {
    id?: string 
  }
}

export default function getById(req: YourNextApiRequest, res: NextApiResponse) {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "application/json");
  //   res.end(req.query.id);
  // Нижче те саме, але коротко
  res.json({ yourId: req.query.id });
}
