import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFrom = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const contactTo = process.env.CONTACT_TO_EMAIL ?? "snaveedn23@gmail.com";

function json(body, statusCode = 200) {
  return {
    statusCode,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return json({ success: true });
  }

  if (event.httpMethod !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }

  if (!resendApiKey) {
    return json({ error: "Resend is not configured on the server." }, 500);
  }

  let payload;

  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return json({ error: "Invalid request payload." }, 400);
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const company = payload.company?.trim() ?? "Not provided";
  const projectType = payload.projectType?.trim() ?? "Not provided";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return json({ error: "Name, email, and message are required." }, 400);
  }

  if (!isValidEmail(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  const resend = new Resend(resendApiKey);

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeProjectType = escapeHtml(projectType);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: resendFrom,
      to: contactTo,
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      text: [
        "New portfolio inquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Project type: ${projectType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New portfolio inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Project type:</strong> ${safeProjectType}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      return json(
        { error: error.message || "Failed to send the message. Please try again." },
        500,
      );
    }

    return json({ success: true });
  } catch {
    return json({ error: "Failed to send the message. Please try again." }, 500);
  }
}
