import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-mfW_kxYm.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as ShieldAlert, c as Menu, d as CircleCheck, f as ChevronDown, h as ArrowRight, i as Sparkles, l as Gauge, m as Braces, n as X, o as ScanLine, p as BrainCircuit, r as Upload, s as Network, t as Zap, u as Database } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DjMEd4Nq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var links$1 = [
	{
		href: "#how",
		label: "How it Works"
	},
	{
		href: "#features",
		label: "Features"
	},
	{
		href: "#results",
		label: "Results"
	},
	{
		href: "#faq",
		label: "FAQ"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 backdrop-blur-md bg-[#0d1117]/80 border-b border-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex h-8 w-8 items-center justify-center rounded-lg cta-gradient",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold tracking-tight",
						children: "Invoice IQ Pro"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex items-center gap-8",
					children: links$1.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-white/70 hover:text-white transition-colors",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium cta-gradient",
					children: ["Request a Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((s) => !s),
					className: "md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-white/80 hover:bg-white/5",
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden border-t border-white/5 px-6 py-4 space-y-3 bg-[#0d1117]",
			children: [links$1.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "block text-sm text-white/80",
				children: l.label
			}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				onClick: () => setOpen(false),
				className: "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium cta-gradient",
				children: ["Request a Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})]
		})]
	});
}
function useInView(options = { threshold: .15 }) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || typeof IntersectionObserver === "undefined") {
			setInView(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			});
		}, options);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return {
		ref,
		inView
	};
}
function Reveal({ children, delay = 0, className = "" }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		style: {
			opacity: inView ? void 0 : 0,
			animation: inView ? `fade-in-up 0.7s ease-out ${delay}ms both` : void 0
		},
		children
	});
}
var stats = [
	{
		v: "95%",
		l: "Accuracy"
	},
	{
		v: "10x",
		l: "Faster Processing"
	},
	{
		v: "0",
		l: "Manual Entry"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10",
			style: { background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.25), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(249,115,22,0.15), transparent 60%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6 pt-24 pb-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-gradient",
					children: "AI-POWERED INVOICE AUTOMATION"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]",
						children: "Stop Entering Invoices Manually."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 160,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xl sm:text-2xl italic text-white/60",
						children: "Let AI read, extract, and push to SAP — in seconds."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 240,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 mx-auto max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed",
						children: "Invoice IQ Pro uses OCR and AI to automatically extract invoice data from PDFs and push it directly into SAP — eliminating manual entry, reducing errors, and saving hours every day."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 320,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium cta-gradient",
							children: ["Request a Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-white/15 text-white hover:bg-white/5 transition-colors",
							children: "See How It Works"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 420,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto",
						children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl sm:text-3xl font-semibold text-gradient",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs sm:text-sm text-white/60",
							children: s.l
						})] }, s.l))
					})
				})
			]
		})]
	});
}
var steps = [
	{
		icon: Upload,
		title: "Upload Invoice PDF",
		body: "Drop your invoice PDF into the system. Supports all formats and layouts."
	},
	{
		icon: Sparkles,
		title: "AI Extracts Data",
		body: "Our OCR engine reads vendor name, invoice number, amounts, tax, and more — instantly."
	},
	{
		icon: Database,
		title: "Auto Push to SAP",
		body: "Extracted data is validated and pushed directly into SAP. No human touch needed."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "py-24 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-3xl sm:text-4xl font-semibold tracking-tight",
				children: "How It Works"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-white/20 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-3 left-7 inline-flex h-7 w-7 items-center justify-center rounded-full cta-gradient text-xs font-semibold",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-white" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/65 leading-relaxed",
								children: s.body
							})
						]
					})
				}, s.title))
			})]
		})
	});
}
var features = [
	{
		icon: ScanLine,
		title: "PDF OCR Scanning",
		body: "Reads any invoice PDF automatically."
	},
	{
		icon: BrainCircuit,
		title: "AI Data Extraction",
		body: "Extracts 15+ fields with high accuracy."
	},
	{
		icon: Network,
		title: "SAP Integration",
		body: "Direct push to SAP with field mapping."
	},
	{
		icon: Braces,
		title: "JSON Output",
		body: "Clean structured data for any system."
	},
	{
		icon: ShieldAlert,
		title: "Error Detection",
		body: "Flags low-confidence fields for review."
	},
	{
		icon: Gauge,
		title: "Fast Processing",
		body: "Processes invoices in under 10 seconds."
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "py-24 px-6 bg-white/[0.015]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-3xl sm:text-4xl font-semibold tracking-tight",
				children: "Everything You Need"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl border border-white/10 bg-[#11161f] p-6 hover:border-white/25 hover:bg-[#141a24] transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-lg cta-gradient",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-semibold",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-white/60",
								children: f.body
							})
						]
					})
				}, f.title))
			})]
		})
	});
}
var metrics = [
	{
		v: "80%",
		l: "Reduction in manual data entry time"
	},
	{
		v: "95%+",
		l: "OCR accuracy across invoice formats"
	},
	{
		v: "10x",
		l: "Faster invoice processing vs manual"
	}
];
function Results() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "results",
		className: "py-24 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center text-3xl sm:text-4xl font-semibold tracking-tight",
					children: "Real Results for Real Businesses"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 md:grid-cols-3",
					children: metrics.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-5xl font-semibold text-gradient",
								children: m.v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-white/70",
								children: m.l
							})]
						})
					}, m.l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 300,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-center text-sm text-white/55 max-w-2xl mx-auto",
						children: "Companies using Invoice IQ Pro process hundreds of invoices daily with zero manual effort."
					})
				})
			]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var faqs = [
	{
		q: "What file formats does Invoice IQ Pro support?",
		a: "Currently supports PDF invoices in all layouts and formats."
	},
	{
		q: "Does it work with our SAP system?",
		a: "Yes, Invoice IQ Pro integrates directly with SAP using standard BAPI field mapping."
	},
	{
		q: "How accurate is the AI extraction?",
		a: "Our OCR engine achieves 95%+ accuracy. Low-confidence fields are flagged for manual review."
	},
	{
		q: "Is our invoice data secure?",
		a: "Yes, all data is encrypted and processed securely. We never store sensitive invoice data."
	},
	{
		q: "How do we get started?",
		a: "Simply fill out the contact form below and our team will reach out within 4 business hours."
	}
];
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-24 px-6 bg-white/[0.015]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-3xl sm:text-4xl font-semibold tracking-tight",
				children: "Frequently Asked Questions"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-12 space-y-3",
					children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						className: "rounded-xl border border-white/10 bg-white/[0.03] px-5 !border-b",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left text-base font-medium hover:no-underline",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-sm text-white/65",
							children: f.a
						})]
					}, i))
				})
			})]
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var sendDemoRequest = createServerFn({ method: "POST" }).validator((input) => schema.parse(input)).handler(createSsrRpc("2fdc713f09f523b79982893fbfedf7a0c984c446e3a671e69abeb658c7514f26"));
var fields = [
	{
		name: "name",
		label: "Your Name",
		placeholder: "Ravi Sharma",
		type: "text"
	},
	{
		name: "company",
		label: "Company Name",
		placeholder: "Acme Technologies",
		type: "text"
	},
	{
		name: "email",
		label: "Work Email",
		placeholder: "ravi@company.com",
		type: "email"
	},
	{
		name: "phone",
		label: "Phone Number",
		placeholder: "+91 98765 43210",
		type: "tel"
	}
];
function ContactForm() {
	const send = useServerFn(sendDemoRequest);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [success, setSuccess] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		company: "",
		email: "",
		phone: ""
	});
	const [touched, setTouched] = (0, import_react.useState)({
		name: false,
		company: false,
		email: false,
		phone: false
	});
	const isEmpty = (v) => v.trim().length === 0;
	const onSubmit = async (e) => {
		e.preventDefault();
		setErrorMsg(null);
		setTouched({
			name: true,
			company: true,
			email: true,
			phone: true
		});
		if (fields.some((f) => isEmpty(values[f.name]))) return;
		setSubmitting(true);
		try {
			const result = await send({ data: {
				name: values.name.trim(),
				company: values.company.trim(),
				email: values.email.trim(),
				phone: values.phone.trim()
			} });
			if (!result.ok) {
				setErrorMsg("Email could not be sent. Please try again.");
				return;
			}
			if (!result.emailSent) {
				console.warn("Email delivery failed", result.reason);
				setErrorMsg("Email could not be sent. Please try again.");
				return;
			}
			setSuccess(true);
		} catch (err) {
			console.error(err);
			setErrorMsg("Something went wrong. Please try again or email us at brijeshvquiver@gmail.com");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl grid lg:grid-cols-2 gap-12 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-gradient",
					children: "GET IN TOUCH"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-tight",
						children: "Talk to our team."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 160,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xl italic text-white/60",
						children: "We'll call you within 4 business hours."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 240,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-white/65 leading-relaxed",
						children: "No demos, no slides, no pressure. Just a straight conversation about whether Invoice IQ Pro is right for your business."
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 160,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl border border-white/10 bg-[#11161f] p-7",
					style: { boxShadow: "0 20px 60px -20px rgb(0 0 0 / 0.7)" },
					children: success ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center py-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-full bg-emerald-500/15 p-4 mb-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "h-14 w-14 text-emerald-400",
									strokeWidth: 2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-semibold",
								children: "Request Received!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-white/65",
								children: "We'll call you within 4 business hours. Talk soon!"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						noValidate: true,
						className: "space-y-5",
						children: [
							fields.map((f) => {
								const showError = touched[f.name] && isEmpty(values[f.name]);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-white/70",
										htmlFor: f.name,
										children: f.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: f.name,
										name: f.name,
										type: f.type,
										required: true,
										value: values[f.name],
										onChange: (e) => setValues((v) => ({
											...v,
											[f.name]: e.target.value
										})),
										onBlur: () => setTouched((t) => ({
											...t,
											[f.name]: true
										})),
										placeholder: f.placeholder,
										"aria-invalid": showError,
										className: `focus-glow mt-1.5 w-full rounded-lg border bg-[#0d1117] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors ${showError ? "border-red-500/60" : "border-white/10"}`
									}),
									showError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1.5 text-xs text-red-400",
										children: [f.label, " is required."]
									})
								] }, f.name);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: submitting,
								className: "cta-gradient inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold disabled:opacity-60",
								children: [submitting ? "Sending..." : "Request my free callback", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}),
							errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-red-400 text-center",
								children: errorMsg
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/50 text-center",
								children: "We'll call you within 4 business hours. No spam, no hard sell."
							})
						]
					})
				})
			})]
		})
	});
}
var links = [
	{
		href: "#how",
		label: "How it Works"
	},
	{
		href: "#features",
		label: "Features"
	},
	{
		href: "#faq",
		label: "FAQ"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-white/5 px-6 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex h-8 w-8 items-center justify-center rounded-lg cta-gradient",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold",
					children: "Invoice IQ Pro"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-white/55",
					children: "Automate your invoice processing with AI."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-wrap gap-6",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					className: "text-sm text-white/65 hover:text-white",
					children: l.label
				}, l.href))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl mt-8 pt-6 border-t border-white/5 text-xs text-white/45",
			children: "© 2025 Invoice IQ Pro. All rights reserved."
		})]
	});
}
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#0d1117] text-white antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { theme: "dark" })
		]
	});
}
//#endregion
export { Landing as component };
