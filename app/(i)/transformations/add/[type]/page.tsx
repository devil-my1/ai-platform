import { Metadata } from "next"
// import { useParams } from "next/navigation"
import React from "react"

export const metadata: Metadata = {
	title: "Transformation Add Page"
}

const TransformationAddPage = async ({ params }: SearchParamProps) => {
	const { type } = await params
	// const { type } = useParams<{ type: TransformationTypeKey }>()

	return <div>Transformation Add Page. Type: {`${type}`}</div>
}

export default TransformationAddPage
