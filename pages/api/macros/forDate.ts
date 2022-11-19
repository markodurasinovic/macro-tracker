import type { NextApiRequest, NextApiResponse } from 'next'

import nextConnect from 'next-connect'
import { withMongo } from '../../../middleware/database'
import { Db } from 'mongodb'

export default nextConnect<NextApiRequest, NextApiResponse>()
    .post(async (req, res) => {
        const macroItems = await withMongo(async (db: Db) => {
            const collection = db.collection<MacroItem>(`${process.env.MACRO_ITEM_COLLECTION}`)

            const queryDate = new Date(req.body.date)
            const start = new Date(queryDate.getFullYear(), queryDate.getMonth(), queryDate.getDate())
            const end = new Date(queryDate.getFullYear(), queryDate.getMonth(), queryDate.getDate() + 1)
            
            return await collection.find({ date: { $gte: start, $lt: end } }).toArray()
        })
        return res.json(macroItems)
    })