import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
	title: "Transformations Page"
}

const TransformationsPage = ({
	params: { id, type },
	searchParams
}: SearchParamProps) => {
	return <div>Transformation Page</div>
}

export default TransformationsPage
