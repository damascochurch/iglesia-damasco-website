"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // In a real implementation, you would send an email here
  // For example, using a service like SendGrid, Mailgun, or AWS SES

  // For now, we'll just log the data
  console.log({
    to: "damasco@iglesiadamasco.com",
    from: email,
    name,
    subject,
    message,
  })

  // You could store the message in a database here

  // Redirect to a thank you page or back to the contact page with a success message
  // For now, we'll just redirect back to the contact page
  redirect("/contacto?success=true")
}
