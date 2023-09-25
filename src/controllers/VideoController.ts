
// get videos on homepage

import { Request, Response } from "express";

//get videos based on search parameters
const video_From_Search = async (req: Request, res: Response)=>{
    let search = req.query.search as string;
    // const {success, data, code, message, error} = await get_videos_from_search(search);
    
}