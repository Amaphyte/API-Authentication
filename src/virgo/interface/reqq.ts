import { Request } from "express"

export interface reqq extends Request{
    user: object
  }