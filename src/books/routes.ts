/**
 *
 * Autogenerated book from urn-cli
 *
 */
import uranio from "uranio";
export const routes_book = {
	superuser: {
		dock: {
			url: "/superusers",
			auth_url: "/superauth",
		},
	},
	user: {
		dock: {
			url: "/users",
			auth_url: "/auth",
		},
	},
	group: {
		dock: {
			url: "/groups",
		},
	},
	media: {
		dock: {
			url: "/media",
		},
	},
	setting: {
		dock: {
			url: "/settings",
		},
	},
	error: {
		dock: {
			url: "/errors",
		},
	},
	request: {
		dock: {
			url: "/requests",
		},
	},
	customer: {
		plural: "customers",
		dock: {
			url: "/customers",
			routes: {
				pippi: {
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.READ,
					url: "/pippo",
					return: Number,
				},
			},
		},
	},
	mykart: {
		plural: "mykarts",
		dock: {
			url: "/mykarts",
			auth_url: "/myauthkart",
		},
	},
	product: {
		dock: {
			url: "/products",
			auth_url: "/proauths",
			routes: {
				myroute: {
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.READ,
					url: "/myroute",
				},
			},
		},
	},
} as const;
