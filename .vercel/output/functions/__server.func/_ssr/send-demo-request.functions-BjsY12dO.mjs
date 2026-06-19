import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/send-demo-request.functions-BjsY12dO.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var schema = objectType({
	name: stringType().trim().min(1).max(100),
	company: stringType().trim().min(1).max(150),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().min(3).max(40)
});
var DEMO_REQUEST_RECIPIENT = "brijeshvquiver@gmail.com";
var RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Invoice IQ Pro <onboarding@resend.dev>";
var sendDemoRequest_createServerFn_handler = createServerRpc({
	id: "2fdc713f09f523b79982893fbfedf7a0c984c446e3a671e69abeb658c7514f26",
	name: "sendDemoRequest",
	filename: "src/lib/send-demo-request.functions.ts"
}, (opts) => sendDemoRequest.__executeServer(opts));
var sendDemoRequest = createServerFn({ method: "POST" }).validator((input) => schema.parse(input)).handler(sendDemoRequest_createServerFn_handler, async ({ data }) => {
	const resendKey = process.env.RESEND_API_KEY;
	if (!resendKey) return {
		ok: false,
		emailSent: false,
		reason: "email_unconfigured"
	};
	const text = `New demo request received:

Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}

Sent from Invoice IQ Pro website.`;
	const html = `<div style="font-family:Arial,sans-serif;color:#0d1117;line-height:1.6">
      <h2 style="margin:0 0 16px">New demo request received</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
      <p style="color:#6b7280;font-size:12px">Sent from Invoice IQ Pro website.</p>
    </div>`;
	const res = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${resendKey}`
		},
		body: JSON.stringify({
			from: RESEND_FROM_EMAIL,
			to: [DEMO_REQUEST_RECIPIENT],
			reply_to: data.email,
			subject: "New Demo Request — Invoice IQ Pro",
			text,
			html
		})
	});
	if (!res.ok) {
		const body = await res.text();
		console.error("Demo request email failed", {
			status: res.status,
			body
		});
		if (res.status === 403 && body.includes("You can only send testing emails")) return {
			ok: false,
			emailSent: false,
			reason: "sender_domain_required"
		};
		return {
			ok: false,
			emailSent: false,
			reason: "email_failed"
		};
	}
	return {
		ok: true,
		emailSent: true
	};
});
function escapeHtml(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
//#endregion
export { sendDemoRequest_createServerFn_handler };
