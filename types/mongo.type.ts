import { Document } from "mongoose"

declare interface IImage extends Document {
	title: string
	transformationType: string
	publicId: string
	secureUrl: string
	width?: number
	height?: number
	config?: object
	transformationUrl?: string
	aspectRatio?: string
	prompt?: string
	color?: string
	author?: IUser
	createdAt?: Date
	updatedAt?: Date
}

declare interface IUser extends Document {
	clerkId: string
	planId: string
	firstName: string
	lastName: string
	avatar?: string
	email: string
	password: string
	creditBalance: number
}

export interface ITransaction {
	stripeId: string
	amount: number
	plan: string
	credits: number
	buyer: IUser
	createdAt?: Date
	updatedAt?: Date
}
