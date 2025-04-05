import mongoose, { Mongoose } from "mongoose"

interface MongoDBConnection {
	conn: Mongoose | null
	promise: Promise<Mongoose> | null
}
const MONGODB_URI = process.env.MONGODB_URL

let chachedConnection: MongoDBConnection = (global as any).mongoose

if (!chachedConnection) {
	chachedConnection = (global as any).mongoose = { conn: null, promise: null }
}

export const connectToDatabase = async () => {
	if (chachedConnection.conn) return chachedConnection.conn
	if (!MONGODB_URI)
		throw new Error("Please define the MONGODB_URL environment variable")

	chachedConnection.promise =
		chachedConnection.promise ||
		mongoose.connect(MONGODB_URI, { bufferCommands: false, dbName: "progai" })

	chachedConnection.conn = await chachedConnection.promise

	return chachedConnection.conn
}
