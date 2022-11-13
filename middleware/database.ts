import { Db, MongoClient, MongoClientOptions } from 'mongodb'

const connectToDatabase = async(): Promise<{ client: MongoClient, db: Db }> => {
    const opts: MongoClientOptions = {}
    const promise = MongoClient.connect(`${process.env.MONGO_CONNECTION_STRING}`, opts).then(client => {
        return {
            client,
            db: client.db(process.env.MONGO_DB)
        }
    })
    return await promise
}

export async function withMongo<T>(fn: (db: Db) => Promise<T>): Promise<T> {
    const res = await connectToDatabase()
    return await fn(res.db)
}