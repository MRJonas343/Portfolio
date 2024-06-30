import { NextResponse, NextRequest } from "next/server"
import { createTransport } from "nodemailer"

export async function POST(req: NextRequest) {
	const userGmail = process.env.APP_EMAIL
	const userPassword = process.env.APP_PASSWORD
	const data = await req.json()

	const transporter = createTransport({
		service: "gmail",
		auth: {
			user: userGmail,
			pass: userPassword,
		},
	})

	const mailOptions = {
		from: userGmail,
		to: userGmail,
		subject: "Email from your portfolio website",
		text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
	}

	try {
		await transporter.sendMail(mailOptions)
	} catch (error) {
		console.log(error)
	}

	return NextResponse.json({
		message: "Email sent",
	})
}
