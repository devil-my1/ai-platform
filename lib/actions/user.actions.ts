"use server"

import { revalidatePath } from "next/cache"
import User from "../db/models/user.model"
import { connectToDatabase } from "../db/mongoose"
import { handleError } from "../utils"

export async function createUser(user: CreateUserParams) {
	try {
		console.log("Creating user...")
		await connectToDatabase()
		const newUser = await User.create(user)
		console.log("User created successfully:", { newUser })
		return JSON.parse(JSON.stringify(newUser))
	} catch (error) {
		handleError(error)
	}
}

export async function getUserById(id: string) {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId: id })
		if (!user) throw new Error("User not found")

		return JSON.parse(JSON.stringify(user))
	} catch (error) {
		handleError(error)
	}
}

export async function updateUser(id: string, user: UpdateUserParams) {
	try {
		await connectToDatabase()

		const updatedUser = await User.findOneAndUpdate({ clerkId: id }, user, {
			new: true
		})

		if (!updatedUser) throw new Error("User Update Failed")

		return JSON.parse(JSON.stringify(updatedUser))
	} catch (error) {
		handleError(error)
	}
}

export async function deleteUser(id: string) {
	try {
		await connectToDatabase()

		const deletedUser = await User.findOneAndDelete({ clerkId: id })

		if (!deletedUser) throw new Error("User Delete Failed")
		revalidatePath("/")

		return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
	} catch (error) {
		handleError(error)
	}
}

export async function getAllUsers() {
	try {
		await connectToDatabase()
		const users = await User.find({}).sort({ createdAt: -1 })
		return JSON.parse(JSON.stringify(users))
	} catch (error) {
		handleError(error)
	}
}

export async function updateCredits(id: string, creditFee: number) {
	try {
		await connectToDatabase()

		const updatedUserCredits = await User.findOneAndUpdate(
			{ _id: id },
			{ $inc: { creditBalance: creditFee } },
			{ new: true }
		)
		if (!updatedUserCredits) throw new Error("User credits update failed!!!")
		return JSON.parse(JSON.stringify(updatedUserCredits))
	} catch (error) {
		handleError(error)
	}
}
