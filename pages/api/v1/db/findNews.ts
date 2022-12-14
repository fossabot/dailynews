import { NextApiRequest, NextApiResponse } from "next";
import findNewsHook from "../../../../lib/db/findNews";

export default async function findNews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, titleSlug, by, slug, sourceUrl, content } = req.body;

  const data = await findNewsHook({
    title: title,
    titleSlug: titleSlug,
    by: by,
    slug: slug,
    sourceUrl: sourceUrl,
    content: content,
  });

  res.status(200).json(data);
}
