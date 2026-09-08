import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Building2, E as ArrowRight, S as ChartLine, T as BadgeCheck, _ as Handshake, a as ShieldCheck, b as Facebook, c as Phone, d as MapPin, f as Mail, g as Instagram, h as Landmark, i as Shield, l as PenLine, m as Linkedin, n as Users, o as Scale, p as Lock, s as ReceiptText, t as X, u as Menu, v as GraduationCap, w as BookOpen, x as CircleCheck, y as FileSpreadsheet } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BMhPidIR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function InfinityMark({ className, inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 72 36",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M36 18C32.2 10.4 26.6 6 20 6 12.3 6 6 11.4 6 18s6.3 12 14 12c6.6 0 12.2-4.4 16-12",
			className: inverted ? "stroke-navy-fg" : "stroke-navy",
			strokeWidth: "5.5",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M36 18c3.8 7.6 9.4 12 16 12 7.7 0 14-5.4 14-12S59.7 6 52 6c-6.6 0-12.2 4.4-16 12",
			className: "stroke-accent",
			strokeWidth: "5.5",
			strokeLinecap: "round"
		})]
	});
}
function Logo({ className, compact = false, inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfinityMark, {
			inverted,
			className: cn("h-8 w-16 shrink-0", compact && "h-7 w-14")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-sans text-[0.95rem] font-semibold tracking-tight", inverted ? "text-navy-fg" : "text-navy", compact && "text-[0.85rem]"),
				children: "WAF & ANOH"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 font-sans text-[0.62rem] font-semibold tracking-[0.22em] text-accent", compact && "text-[0.58rem] tracking-[0.18em]"),
				children: "CONSULTING"
			})]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-[background-color,box-shadow,transform,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg shadow-[0_8px_20px_rgb(245_130_32_/_0.28)] hover:bg-accent-hover",
			navy: "bg-navy text-navy-fg hover:bg-navy-mid",
			outline: "bg-bg-elevated text-navy shadow-card hover:shadow-card-hover",
			ghost: "bg-transparent text-navy-fg hover:bg-navy-fg/10",
			whatsapp: "bg-whatsapp text-whatsapp-fg hover:brightness-110"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-10 px-4 text-sm",
			lg: "h-12 px-7 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var SITE = {
	name: "WAF & ANOH CONSULTING",
	shortName: "WAF & ANOH",
	tagline: "Expertise within your reach",
	headline: "Your trusted partner for your company's performance",
	email: "contact@waf-anohconsulting.ci",
	addressLine: "Yopougon Ananeraie, COOPEC",
	city: "Abidjan, Côte d'Ivoire",
	phones: [{
		display: "07 68 90 07 50",
		tel: "+2250768900750",
		digits: "0768900750"
	}, {
		display: "07 99 14 05 74",
		tel: "+2250799140574",
		digits: "0799140574"
	}],
	whatsapp: "2250768900750"
};
var NAV = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#training",
		label: "Training"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var SERVICES = [
	"Accounting follow-up",
	"Taxation",
	"Business management",
	"Social welfare (CNPS)",
	"Business creation",
	"FNE training",
	"Student training",
	"Other"
];
function whatsappHref(message) {
	const base = `https://wa.me/${SITE.whatsapp}`;
	if (!message) return base;
	return `${base}?text=${encodeURIComponent(message)}`;
}
var useContactIntent = create((set) => ({
	service: "",
	setService: (service) => set({ service })
}));
function goToContact(service) {
	if (service) useContactIntent.getState().setService(service);
	scrollToContact();
}
function scrollToContact() {
	document.getElementById("contact")?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
	const name = document.getElementById("contact-name");
	window.setTimeout(() => name?.focus(), 400);
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	function handleNav(href) {
		setOpen(false);
		const id = href.replace("#", "");
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-200", scrolled ? "border-border bg-bg-elevated/95 shadow-[0_8px_24px_rgb(11_31_77_/_0.06)] backdrop-blur-md" : "border-transparent bg-bg-elevated"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					onClick: (e) => {
						e.preventDefault();
						handleNav("#home");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "WAF & ANOH CONSULTING — Home"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: (e) => {
							e.preventDefault();
							handleNav(item.href);
						},
						className: "rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-navy",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "hidden sm:inline-flex",
						onClick: () => {
							setOpen(false);
							goToContact();
						},
						children: "Book an appointment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy-soft lg:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("fixed inset-x-0 top-[4.25rem] bottom-0 z-40 bg-navy lg:hidden", "transition-opacity duration-200", open ? "opacity-100" : "pointer-events-none opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex h-full flex-col gap-1 px-6 py-8",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: (e) => {
						e.preventDefault();
						handleNav(item.href);
					},
					className: "rounded-xl px-3 py-3.5 font-display text-2xl text-navy-fg",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "mt-6 w-full",
					onClick: () => {
						setOpen(false);
						goToContact();
					},
					children: "Book an appointment"
				})]
			})
		})]
	});
}
function BrandRibbon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 520 220",
		className: cn("overflow-visible", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
			id: "brand-ribbon",
			x1: "0%",
			y1: "0%",
			x2: "100%",
			y2: "100%",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "0%",
				stopColor: "var(--color-navy)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "100%",
				stopColor: "var(--color-accent)"
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M20 40c80-36 150 28 240 8 88-20 130 34 220 18 28-5 48 18 40 46-18 62-90 94-168 104-92 12-150-18-228-8-70 8-118-24-118-70 0-36 8-72 14-98Z",
			fill: "url(#brand-ribbon)",
			opacity: "0.92"
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-navy text-navy-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandRibbon, { className: "pointer-events-none absolute -right-16 -bottom-16 h-56 w-auto opacity-80 sm:h-72" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-navy-muted",
							children: [SITE.tagline, ". An Abidjan firm for accounting follow-up, taxation, business management and CNPS — close, discreet, and exact."]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-sans text-xs font-semibold tracking-[0.18em] text-accent uppercase",
						children: "Quick links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5 text-sm",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "text-navy-muted transition-colors hover:text-navy-fg",
							children: item.label
						}) }, item.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-sans text-xs font-semibold tracking-[0.18em] text-accent uppercase",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-3 text-sm text-navy-muted",
							children: [
								SITE.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${p.tel}`,
										className: "hover:text-navy-fg",
										children: p.display
									})]
								}, p.tel)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${SITE.email}`,
										className: "break-all hover:text-navy-fg",
										children: SITE.email
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										SITE.addressLine,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										SITE.city
									] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex gap-2",
							children: [
								{
									label: "LinkedIn",
									Icon: Linkedin
								},
								{
									label: "Facebook",
									Icon: Facebook
								},
								{
									label: "Instagram",
									Icon: Instagram
								}
							].map(({ label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								"aria-label": label,
								className: "inline-flex size-10 items-center justify-center rounded-full bg-navy-fg/10 text-navy-fg transition-colors hover:bg-accent hover:text-accent-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
							}, label))
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative border-t border-white/10 px-4 py-5 text-center text-xs text-navy-muted sm:px-6",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					SITE.name,
					". All rights reserved."
				]
			})
		]
	});
}
function WhatsAppGlyph({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2C6.5 2 2.02 6.37 2.02 11.78c0 1.73.46 3.41 1.34 4.9L2 22l5.5-1.43a10.2 10.2 0 0 0 4.54 1.09h.04c5.54 0 10.02-4.37 10.02-9.78C22.1 6.37 17.58 2 12.04 2Zm5.83 13.9c-.24.68-1.4 1.3-1.94 1.34-.5.04-1.12.06-1.81-.11-.42-.1-.95-.31-1.64-.6-2.89-1.24-4.77-4.13-4.92-4.32-.14-.2-1.18-1.56-1.18-2.97 0-1.4.74-2.1 1-2.38.24-.26.64-.38.86-.38h.62c.2 0 .46-.02.7.54.26.58.88 2.14.96 2.3.08.16.12.34.02.54-.1.2-.16.34-.32.52-.16.18-.33.4-.47.54-.16.16-.32.32-.14.62.18.3.8 1.32 1.72 2.14 1.18 1.06 2.18 1.38 2.5 1.54.3.14.48.12.66-.08.18-.2.78-.9.98-1.2.2-.32.42-.26.7-.16.28.1 1.78.84 2.08.98.3.16.5.22.58.34.08.12.08.7-.16 1.38Z" })
	});
}
function WhatsAppFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappHref(`Hello ${SITE.name}, I would like to book an appointment.`),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-fg shadow-float transition-transform duration-150 hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppGlyph, { className: "size-7" })
	});
}
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden bg-navy text-navy-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero.jpg",
				alt: "WAF & ANOH CONSULTING team in a client meeting",
				className: "absolute inset-0 size-full object-cover object-[68%_center]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/25 max-md:via-navy/80 max-md:to-navy/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/20 md:from-navy/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "pointer-events-none absolute -bottom-8 left-0 w-[140%] max-w-none text-accent sm:w-full",
				viewBox: "0 0 1440 140",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 88c220-52 380 40 620 8 250-34 360-70 820 18v46H0V88Z",
					fill: "currentColor",
					opacity: "0.92"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "pointer-events-none absolute bottom-0 left-0 w-full text-bg",
				viewBox: "0 0 1440 72",
				preserveAspectRatio: "none",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 40c200 32 380-28 620 0 250 30 380 38 820-18v50H0V40Z",
					fill: "currentColor"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-center px-4 py-20 sm:min-h-[38rem] sm:px-6 md:min-h-[42rem] md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-enter font-sans text-xs font-semibold tracking-[0.22em] text-accent uppercase",
						style: { animationDelay: "40ms" },
						children: SITE.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "hero-enter mt-4 max-w-xl font-display text-4xl leading-tight font-semibold text-navy-fg sm:text-5xl md:text-6xl",
						style: { animationDelay: "120ms" },
						children: SITE.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-enter mt-5 max-w-lg text-base leading-relaxed text-navy-muted sm:text-lg",
						style: { animationDelay: "200ms" },
						children: "Accounting follow-up, taxation, business management and social welfare (CNPS) — handled with rigor, so you can build with peace of mind."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-enter mt-8 flex flex-wrap items-center gap-3",
						style: { animationDelay: "280ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							onClick: () => goToContact(),
							children: ["Book an appointment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "ghost",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								children: "Explore our services"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hero-enter mt-8 flex items-center gap-2 text-sm text-navy-muted",
						style: { animationDelay: "340ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-accent" }), "Multidisciplinary team · CNPS-compliant · FNE-ready"]
					})
				]
			})
		]
	});
}
function Reveal({ children, className, delayMs = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", visible && "is-in", className),
		style: delayMs ? { transitionDelay: `${delayMs}ms` } : void 0,
		children
	});
}
var COMMITMENTS = [
	{
		title: "Rigor and professionalism",
		body: "Every filing, statement and deadline is treated with method. Clean books, on time.",
		icon: Scale,
		tone: "navy"
	},
	{
		title: "Availability and closeness",
		body: "A partner you can reach — in Yopougon and on WhatsApp — not a distant back office.",
		icon: Handshake,
		tone: "accent"
	},
	{
		title: "Confidentiality and integrity",
		body: "Your figures, your people, your plans. Handled discreetly, always.",
		icon: Lock,
		tone: "navy"
	}
];
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-bg py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-6 -left-6 size-28 rounded-full bg-accent/20",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -right-4 -bottom-8 size-36 rounded-full bg-navy/10",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-3xl bg-bg-elevated p-2 shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/about.jpg",
							alt: "Consultants reviewing financial statements together",
							className: "aspect-[4/3] w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-navy/10"
						})
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase",
					children: "About us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-semibold text-navy sm:text-4xl",
					children: "Expertise within your reach"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted",
					children: "WAF & ANOH CONSULTING is an Abidjan firm built around a multidisciplinary team. We help entrepreneurs and growing companies keep management sound, compliant and high-performing — from the first ledger to the year-end statements."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Based in Yopougon Ananeraie, we stay close to the businesses we serve: clear advice, careful filings, and a team you can actually reach."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-3 sm:gap-3",
				children: COMMITMENTS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delayMs: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full rounded-2xl bg-bg-elevated p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: item.tone === "accent" ? "inline-flex size-11 items-center justify-center rounded-full bg-accent-soft text-accent" : "inline-flex size-11 items-center justify-center rounded-full bg-navy-soft text-navy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "size-5",
									strokeWidth: 1.75
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-sans text-sm font-semibold text-navy",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-muted",
								children: item.body
							})
						]
					})
				}, item.title))
			})] })]
		})
	});
}
var CORE = [
	{
		title: "Accounting follow-up",
		body: "Day-to-day bookkeeping, journals and monthly closing, so you always know where the company stands.",
		icon: BookOpen
	},
	{
		title: "Taxation",
		body: "Declarations, filings and a lawful reading of your tax position — no surprises at deadline.",
		icon: Landmark
	},
	{
		title: "Business management",
		body: "Cash-flow visibility, dashboards and advice to steer the company with a cooler head.",
		icon: ChartLine
	},
	{
		title: "Social welfare (CNPS)",
		body: "Registration, contributions and employee files kept compliant with CNPS rules.",
		icon: Shield
	}
];
function ServicesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative bg-bg-elevated py-20 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-16 -right-20 size-64 rounded-full bg-accent/10",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-10 -left-16 size-52 rounded-full bg-navy/8",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase",
						children: "What we do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-lg text-3xl font-semibold text-navy sm:text-4xl",
						children: "Our core services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "Four pillars for companies that want their numbers right, their filings on time, and a partner who stays close."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: CORE.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delayMs: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex h-full flex-col rounded-3xl bg-bg p-6 shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-card-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-14 items-center justify-center rounded-full bg-accent text-accent-fg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
										className: "size-6",
										strokeWidth: 1.7
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-sans text-lg font-semibold text-navy",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
									children: item.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									className: "mt-6 self-start",
									onClick: () => goToContact(item.title),
									children: "Request this service"
								})
							]
						})
					}, item.title))
				})]
			})
		]
	});
}
var ITEMS = [
	{
		title: "Business creation",
		body: "From the idea to a registered company, with the right legal form and a clean start.",
		icon: Building2
	},
	{
		title: "Registration follow-up until DFE",
		body: "We stay with the file until the Business Formation Certificate (DFE) is in your hands.",
		icon: BadgeCheck
	},
	{
		title: "Bank loan assistance",
		body: "A file that reads clearly for the bank: statements, forecasts and a coherent story.",
		icon: Landmark
	},
	{
		title: "Payroll preparation",
		body: "Payslips, charges and employee records prepared carefully, month after month.",
		icon: Users
	},
	{
		title: "Financial statements",
		body: "Statement 301-302, Balance Sheet and DISA prepared to standard, ready for filing.",
		icon: FileSpreadsheet
	},
	{
		title: "Business modifications",
		body: "Adding or removing an activity, capital increase, change of manager, and similar updates.",
		icon: PenLine
	}
];
function AdditionalSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-bg py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase",
					children: "Further support"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-semibold text-navy sm:text-4xl",
					children: "Additional services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "Formalities and files that often stall a growing company — handled end to end, so you can get back to the work itself."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-4 sm:grid-cols-2",
				children: ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delayMs: i % 2 * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => goToContact(item.title),
						className: "flex w-full items-start gap-4 rounded-2xl bg-bg-elevated p-5 text-left shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-card-hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-navy-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "size-5",
								strokeWidth: 1.75
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-sans font-semibold text-navy",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted",
							children: item.body
						})] })]
					})
				}) }, item.title))
			})]
		})
	});
}
function TrainingSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "training",
		className: "bg-bg-elevated py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase",
					children: "Skills, not just filings"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-semibold text-navy sm:text-4xl",
					children: "Our training programs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "Practical sessions for entrepreneurs who must stay compliant — and for students and professionals who want to work like the firms do."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "flex h-full flex-col overflow-hidden rounded-3xl bg-navy text-navy-fg shadow-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-7 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, {
									className: "size-5",
									strokeWidth: 1.75
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 font-sans text-xs font-semibold tracking-[0.16em] text-accent uppercase",
								children: "Mandatory from December 2025"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-2xl font-semibold",
								children: "FNE — Electronic Standardized Invoice"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-navy-muted",
								children: "We support entrepreneurs on the official FNE platform: account setup, invoice flow, and the habits that keep you legal once electronic invoicing is required nationwide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-7 self-start",
								onClick: () => goToContact("FNE training"),
								children: "Join the FNE program"
							})
						]
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delayMs: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex h-full flex-col overflow-hidden rounded-3xl bg-bg shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-48 overflow-hidden sm:h-56",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/training.jpg",
								alt: "Practical accounting training session",
								className: "size-full object-cover outline outline-1 -outline-offset-1 outline-navy/10"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-7 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-12 items-center justify-center rounded-full bg-navy-soft text-navy",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
										className: "size-5",
										strokeWidth: 1.75
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-2xl font-semibold text-navy",
									children: "Student & professional training"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
									children: "Hands-on accounting training for graduating students and working professionals: journals, tax logic, CNPS files and the statements a real firm produces every month."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "navy",
									className: "mt-7 self-start",
									onClick: () => goToContact("Student training"),
									children: "Ask about a session"
								})
							]
						})]
					})
				})]
			})]
		})
	});
}
function QuoteSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-navy py-20 text-navy-fg sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-24 -left-16 size-72 rounded-full bg-accent/20",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-20 -bottom-28 size-80 rounded-full bg-accent/25",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "pointer-events-none absolute top-0 left-0 w-full text-accent/30",
				viewBox: "0 0 1440 80",
				preserveAspectRatio: "none",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 0h1440v20c-240 48-480 48-720 12S240 0 0 28V0Z",
					fill: "currentColor"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-4xl px-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-7xl leading-none text-accent sm:text-8xl",
					"aria-hidden": "true",
					children: "“"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "-mt-4 font-display text-2xl leading-snug font-medium text-balance sm:text-3xl md:text-4xl",
					children: "WAF&ANOH CONSULTING puts its expertise at your service to help you build, manage and grow your business with complete peace of mind"
				})] })
			})
		]
	});
}
var TESTIMONIALS = [
	{
		quote: "They handled our DFE and the monthly accounts from the first week. I finally spend my time on sales, not paperwork.",
		name: "Aya Kouassi",
		role: "Founder, Kouassi Trading",
		photo: "/images/testimonial-1.jpg"
	},
	{
		quote: "Payroll, CNPS, tax — one team, one WhatsApp thread. Reliable, close, and they never miss a deadline.",
		name: "Jean-Marc Yao",
		role: "Manager, BTP Horizon",
		photo: "/images/testimonial-2.jpg"
	},
	{
		quote: "The FNE training was clear and practical. We were ready before the deadline, without the usual panic.",
		name: "Mariam Traoré",
		role: "Director, Clinique Ananeraie",
		photo: "/images/testimonial-3.jpg"
	}
];
function TestimonialsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-bg py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase",
				children: "Clients"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-semibold text-navy sm:text-4xl",
				children: "What our clients say"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-3",
				children: TESTIMONIALS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delayMs: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "flex h-full flex-col rounded-3xl bg-bg-elevated p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "flex-1 text-sm leading-relaxed text-muted sm:text-base",
							children: [
								"“",
								item.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.photo,
								alt: "",
								className: "size-12 rounded-full object-cover outline outline-1 -outline-offset-1 outline-navy/10"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-sans text-sm font-semibold text-navy",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: item.role
							})] })]
						})]
					})
				}, item.name))
			})]
		})
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("h-12 w-full rounded-xl bg-bg-elevated px-4 text-base text-fg shadow-card outline-none transition-[box-shadow] duration-150 placeholder:text-muted/70 focus-visible:shadow-[0_0_0_2px_var(--color-accent)] disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-navy", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full resize-y rounded-xl bg-bg-elevated px-4 py-3 text-base text-fg shadow-card outline-none transition-[box-shadow] duration-150 placeholder:text-muted/70 focus-visible:shadow-[0_0_0_2px_var(--color-accent)] disabled:opacity-50", className),
		...props
	});
}
function ContactSection() {
	const service = useContactIntent((s) => s.service);
	const setService = useContactIntent((s) => s.setService);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [pending, setPending] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		if (name.length < 2 || phone.length < 8 || !email.includes("@")) {
			toast.error("Please complete your name, phone and a valid email.");
			return;
		}
		setPending(true);
		window.setTimeout(() => {
			setPending(false);
			setSent(true);
			toast.success("Request received. We will get back to you shortly.");
		}, 500);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-bg-elevated py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase",
						children: "Contact us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-semibold text-navy sm:text-4xl",
						children: "Book an appointment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Tell us where you are with the company. We will come back with a clear next step — often the same day, always on WhatsApp if you prefer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-4 text-sm",
						children: [
							SITE.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${p.tel}`,
									className: "font-medium text-navy hover:text-accent",
									children: p.display
								})]
							}, p.tel)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-10 items-center justify-center rounded-full bg-navy-soft text-navy",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${SITE.email}`,
									className: "font-medium text-navy hover:text-accent",
									children: SITE.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-10 items-center justify-center rounded-full bg-navy-soft text-navy",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium text-navy",
										children: SITE.addressLine
									}), SITE.city]
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-3",
				delayMs: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl bg-bg p-6 shadow-card sm:p-8",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-80 flex-col items-center justify-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "size-12 text-accent",
								strokeWidth: 1.6
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl font-semibold text-navy",
								children: "Thank you"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-sm text-muted",
								children: "Your request is in. A member of the team will contact you to confirm a time."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-6",
								variant: "whatsapp",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: whatsappHref(`Hello ${SITE.name}, I just sent an appointment request.`),
									target: "_blank",
									rel: "noreferrer",
									children: "Continue on WhatsApp"
								})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "grid gap-4 sm:grid-cols-2",
						onSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5 sm:col-span-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "contact-name",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "contact-name",
									name: "name",
									autoComplete: "name",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "contact-phone",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "contact-phone",
									name: "phone",
									type: "tel",
									inputMode: "tel",
									autoComplete: "tel",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "contact-email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "contact-email",
									name: "email",
									type: "email",
									autoComplete: "email",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "contact-service",
									children: "Service of interest"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "contact-service",
									name: "service",
									value: service,
									onChange: (e) => setService(e.target.value),
									className: cn("h-12 w-full appearance-none rounded-xl bg-bg-elevated px-4 text-base text-fg shadow-card outline-none", "transition-[box-shadow] duration-150 focus-visible:shadow-[0_0_0_2px_var(--color-accent)]"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select a service"
									}), SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s,
										children: s
									}, s))]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "contact-message",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "contact-message",
									name: "message",
									placeholder: "A few words about your company and what you need…"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									size: "lg",
									className: "w-full sm:w-auto",
									disabled: pending,
									children: pending ? "Sending…" : "Send request"
								})
							})
						]
					})
				})
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#home",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdditionalSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainingSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-center",
			richColors: true
		})
	] });
}
//#endregion
export { Home as component };
