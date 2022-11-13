import { Db, MongoClient, MongoClientOptions } from 'mongodb'

const connectionString = 'mongodb+srv://markoduras:goaOvOthtWODvgru@macrotracker.rwiugrz.mongodb.net/?retryWrites=true&w=majority'

// export const collections: { macroItems?: mongoDb.Collection } = {}

// export async function connectToDatabase() {
//     const client: mongoDb.MongoClient = new mongoDb.MongoClient(connectionString)

//     await client.connect()

//     const db: mongoDb.Db = client.db('macros')

//     const  macroItemCollection: mongoDb.Collection = db.collection('macroItem')

//     collections.macroItems = macroItemCollection

//     console.log(`Successfully connected to database: ${db.databaseName} and collection: ${macroItemCollection.collectionName}`)
// }

const connectToDatabase = async(): Promise<{ client: MongoClient, db: Db }> => {
    const opts: MongoClientOptions = {}

    const promise = MongoClient.connect(connectionString, opts).then(client => {
        return {
            client,
            db: client.db('macros')
        }
    })
    return await promise
}

export async function withMongo<T>(fn: (db: Db) => Promise<T>): Promise<T> {
    const conn = await connectToDatabase()
    return await fn(conn.db)
}