import { model, models, Schema } from "mongoose"

const UserSchema = new Schema({
	clerkId: { type: String, required: true, unique: true },
	planId: { type: String, default: 1 },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	avatar: { type: String },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	creditBalance: { type: Number, default: 10 }
})

const User = models.User || model("User", UserSchema)

export default User
