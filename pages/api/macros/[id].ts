import type { NextApiRequest, NextApiResponse } from 'next'

import nextConnect from 'next-connect'
import { withMongo } from '../../../middleware/database'
import { Db, ObjectId } from 'mongodb'


export default nextConnect<NextApiRequest, NextApiResponse>()
    .delete(async (req, res) => {
        const id = Array.isArray(req.query) ? req.query[0] : req.query
        await withMongo(async (db: Db) => {
            const collection = db.collection<MacroItem>(`${process.env.MACRO_ITEM_COLLECTION}`)
            await collection.deleteOne({_id: new ObjectId(id) })
        })

        return res.status(204).end()
    })