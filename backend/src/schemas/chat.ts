 import { z } from "zod" 

 export const createChatSchema = z.object({
    name: z.string().min(3).max(25),
    
 })