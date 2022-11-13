import type { NextApiRequest, NextApiResponse } from 'next'

import nextConnect from 'next-connect'
import { withMongo } from '../../middleware/database'
import { Db } from 'mongodb'

type MacroItem = {
    food: string;
    amount: number;
    calories: number;
    protein: number;
}

export default nextConnect<NextApiRequest, NextApiResponse>()
    .get(async (req, res) => {
        const macroItems = await withMongo(async (db: Db) => {
            const collection = db.collection<MacroItem>('macroItem')
            return await collection.find().toArray()
        })
        return res.json(macroItems)
    })
    .post(async (req, res) => {
        await withMongo(async (db: Db) => {
            const collection = db.collection<MacroItem>('macroItem')
            await collection.insertOne({ 
                food: req.body.food,
                amount: req.body.amount,
                calories: req.body.calories,
                protein: req.body.protin
             })
        })

        return res.status(204).end()
    })