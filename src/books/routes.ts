/**
 *
 * Autogenerated book from urn-cli
 *
 */
export const routes_book = {
	superuser: {
		dock: {
			url: "/superusers",
			auth: "/superauth",
		},
	},
	user: {
		dock: {
			url: "/users",
			auth: "/auth",
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
		},
	},
	mykart: {
		plural: "mykarts",
		dock: {
			url: "/mykart",
		},
		// bll: () => {
		//   console.log(some + `s`);
		//   return new MYBLL();
		// }
	},
	product: {
		dock: {
			url: "/products",
		},
	},
} as const;
