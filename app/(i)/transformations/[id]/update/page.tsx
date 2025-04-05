import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
	title: "Transformation Update Page"
}

const TransformationUpdatePage = ({
	params: { id, type },
	searchParams
}: SearchParamProps) => {
	return <div>Transformation Page</div>
}

export default TransformationUpdatePage
