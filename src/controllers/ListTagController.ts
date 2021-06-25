import { ListTagService } from "../services/ListTagsService"
import { Request, Response } from "express"

class ListTagsController {
    async handle(req: Request, res: Response) {
        const listTagsService = new ListTagService();

        const tags = await listTagsService.execute();

        return res.json(tags);
    }
}

export { ListTagsController }