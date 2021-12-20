/**
 *
 * Autogenerated book from urn-cli
 *
 */

import uranio from "uranio";
export const atom_book = {
	superuser: {
		authenticate: true,
		plural: "superusers",
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_r: uranio.types.BookPermissionType.NOBODY,
		},
		properties: {
			email: {
				type: uranio.types.BookPropertyType.EMAIL,
				label: "Email",
				unique: true,
				on_error: () => {
					return "email@email.com";
				},
			},
			password: {
				type: uranio.types.BookPropertyType.ENCRYPTED,
				label: "Password",
				hidden: true,
			},
			groups: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				atom: "group",
				label: "Groups",
				optional: true,
			},
		},
	},
	user: {
		authenticate: true,
		plural: "users",
		security: {
			type: uranio.types.BookSecurityType.GRANULAR,
		},
		properties: {
			email: {
				type: uranio.types.BookPropertyType.EMAIL,
				label: "Email",
				unique: true,
			},
			password: {
				type: uranio.types.BookPropertyType.ENCRYPTED,
				label: "Password",
				hidden: true,
			},
			groups: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				atom: "group",
				label: "Groups",
				optional: true,
			},
		},
	},
	group: {
		plural: "groups",
		properties: {
			name: {
				type: uranio.types.BookPropertyType.TEXT,
				unique: true,
				label: "Name",
			},
		},
	},
	media: {
		plural: "media",
		properties: {
			src: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "SRC",
			},
			filename: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Filename",
			},
			type: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Filetype",
			},
			size: {
				type: uranio.types.BookPropertyType.INTEGER,
				label: "Size (byte)",
				validation: {
					min: 0,
				},
			},
			width: {
				optional: true,
				type: uranio.types.BookPropertyType.INTEGER,
				label: "Width",
				validation: {
					min: 0,
				},
			},
			height: {
				optional: true,
				type: uranio.types.BookPropertyType.INTEGER,
				label: "Height",
				validation: {
					min: 0,
				},
			},
		},
	},
	error: {
		plural: "errors",
		connection: "log",
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_r: uranio.types.BookPermissionType.NOBODY,
		},
		properties: {
			status: {
				type: uranio.types.BookPropertyType.INTEGER,
				label: "Status",
			},
			msg: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Message",
			},
			error_code: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Error Code",
			},
			error_msg: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Error Message",
			},
			request: {
				type: uranio.types.BookPropertyType.ATOM,
				label: "Request",
				atom: "request",
				delete_cascade: true,
				optional: true,
			},
			stack: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: "Stack",
				optional: true,
			},
		},
	},
	request: {
		plural: "requests",
		connection: "log",
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_r: uranio.types.BookPermissionType.NOBODY,
		},
		properties: {
			full_path: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Full path",
			},
			route_path: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Route path",
				optional: true,
			},
			atom_path: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Atom path",
				optional: true,
			},
			connection_path: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Connection path",
				optional: true,
			},
			method: {
				type: uranio.types.BookPropertyType.ENUM_STRING,
				label: "Method",
				values: ["GET", "POST", "DELETE"],
				optional: true,
			},
			atom_name: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Atom name",
				optional: true,
				on_error: () => {
					return "generic_atom";
				},
			},
			route_name: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Route name",
				optional: true,
			},
			params: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Params",
				optional: true,
			},
			query: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Query",
				optional: true,
			},
			headers: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: "Headers",
				optional: true,
			},
			body: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: "Body",
				optional: true,
			},
			ip: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "IP",
				optional: true,
			},
			is_auth: {
				type: uranio.types.BookPropertyType.BINARY,
				label: "Is auth",
				optional: true,
			},
			auth_action: {
				type: uranio.types.BookPropertyType.ENUM_STRING,
				label: "Auth action",
				values: ["READ", "WRITE", "AUTH"],
				on_error: () => {
					return "READ";
				},
				optional: true,
			},
		},
	},
	customer: {
		plural: "customers",
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC,
		},
		properties: {
			first_name: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "First name",
			},
			last_name: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Last name",
			},
		},
	},
	mykart: {
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC,
		},
		plural: "mykarts",
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				// label: `${some}-titless`
				label: `titless`,
			},
		},
		// bll: () => {
		//   console.log(some + `s`);
		//   return new MYBLL();
		// }
	},
	product: {
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC,
		},
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Title",
				validation: {
					alphanum: true,
					contain_digit: false,
					max: 7,
				},
				on_error: () => "TITLE",
			},
			description: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: "Description",
			},
			kart: {
				type: uranio.types.BookPropertyType.ATOM,
				label: "Kart",
				atom: "mykart",
				optional: true,
			},
			users: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				label: "Users",
				atom: "user",
				optional: true,
			},
			active: {
				type: uranio.types.BookPropertyType.BINARY,
				label: "Active",
			},
			email: {
				type: uranio.types.BookPropertyType.EMAIL,
				label: "Email",
			},
			password: {
				type: uranio.types.BookPropertyType.ENCRYPTED,
				label: "Password",
			},
			type: {
				type: uranio.types.BookPropertyType.ENUM_NUMBER,
				label: "Type Code",
				values: [1, 2, 3],
				optional: true,
				default: 1,
			},
			type_str: {
				type: uranio.types.BookPropertyType.ENUM_STRING,
				label: "Type String",
				values: ["Red", "Green", "Blue"],
				optional: true,
			},
			price: {
				type: uranio.types.BookPropertyType.FLOAT,
				label: "Price",
				validation: {
					min: 10,
				},
			},
			unit: {
				type: uranio.types.BookPropertyType.INTEGER,
				label: "Unit",
				// validation: {
				//   min: 0,
				//   max: 10
				// }
			},
			categories: {
				type: uranio.types.BookPropertyType.SET_NUMBER,
				label: "Categories",
				// validation: {
				//   length: 2
				// },
				default: [1, 2],
				optional: true,
			},
			categories_str: {
				type: uranio.types.BookPropertyType.SET_STRING,
				label: "Categories string",
				optional: true,
			},
			pub_date: {
				type: uranio.types.BookPropertyType.TIME,
				label: "Pub date",
				// validation: {
				//   min: new Date('2011-03-08')
				// }
			},
		},
	},
} as const;
