import * as types_202516519 from "../uranio/cln/types";
export const atom_book = {
	superuser: {
		properties: {
			email: {
				type: types_202516519.BookPropertyType.EMAIL,
				label: "Email",
				unique: true,
				on_error: () => {
					return "email@email.com";
				},
			},
			password: {
				type: types_202516519.BookPropertyType.ENCRYPTED,
				label: "Password",
				hidden: true,
			},
			groups: {
				type: types_202516519.BookPropertyType.ATOM_ARRAY,
				atom: "group",
				label: "Groups",
				optional: true,
			},
		},
	},
	user: {
		properties: {
			email: {
				type: types_202516519.BookPropertyType.EMAIL,
				label: "Email",
				unique: true,
			},
			password: {
				type: types_202516519.BookPropertyType.ENCRYPTED,
				label: "Password",
				hidden: true,
			},
			groups: {
				type: types_202516519.BookPropertyType.ATOM_ARRAY,
				atom: "group",
				label: "Groups",
				optional: true,
			},
		},
	},
	group: {
		properties: {
			name: {
				type: types_202516519.BookPropertyType.TEXT,
				unique: true,
				label: "Name",
			},
		},
	},
	error: {
		connection: "log",
		properties: {
			status: {
				type: types_202516519.BookPropertyType.INTEGER,
				label: "Status",
			},
			msg: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Message",
			},
			error_code: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Error Code",
			},
			error_msg: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Error Message",
			},
			request: {
				type: types_202516519.BookPropertyType.ATOM,
				label: "Request",
				atom: "request",
				delete_cascade: true,
				optional: true,
			},
			stack: {
				type: types_202516519.BookPropertyType.LONG_TEXT,
				label: "Stack",
				optional: true,
			},
		},
	},
	request: {
		connection: "log",
		properties: {
			full_path: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Full path",
			},
			route_path: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Route path",
				optional: true,
			},
			atom_path: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Atom path",
				optional: true,
			},
			connection_path: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Connection path",
				optional: true,
			},
			method: {
				type: types_202516519.BookPropertyType.ENUM_STRING,
				label: "Method",
				values: ["GET", "POST", "DELETE"],
				optional: true,
			},
			atom_name: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Atom name",
				optional: true,
				on_error: () => {
					return "generic_atom";
				},
			},
			route_name: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Route name",
				optional: true,
			},
			params: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Params",
				optional: true,
			},
			query: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Query",
				optional: true,
			},
			headers: {
				type: types_202516519.BookPropertyType.LONG_TEXT,
				label: "Headers",
				optional: true,
			},
			body: {
				type: types_202516519.BookPropertyType.LONG_TEXT,
				label: "Body",
				optional: true,
			},
			ip: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "IP",
				optional: true,
			},
			is_auth: {
				type: types_202516519.BookPropertyType.BINARY,
				label: "Is auth",
				optional: true,
			},
			auth_action: {
				type: types_202516519.BookPropertyType.ENUM_STRING,
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
		properties: {
			first_name: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "First name",
			},
			last_name: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Last name",
			},
		},
	},
	mykart: {
		plural: "mykarts",
		properties: {
			title: {
				type: types_202516519.BookPropertyType.TEXT,
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
		properties: {
			title: {
				type: types_202516519.BookPropertyType.TEXT,
				label: "Title",
				// validation: {
				//   alphanum: true,
				//   contain_digit: false,
				//   max: 7
				// }
			},
			description: {
				type: types_202516519.BookPropertyType.LONG_TEXT,
				label: "Description",
			},
			kart: {
				type: types_202516519.BookPropertyType.ATOM,
				label: "Kart",
				atom: "mykart",
				optional: true,
			},
			users: {
				type: types_202516519.BookPropertyType.ATOM_ARRAY,
				label: "Users",
				atom: "user",
			},
			active: {
				type: types_202516519.BookPropertyType.BINARY,
				label: "Active",
			},
			email: {
				type: types_202516519.BookPropertyType.EMAIL,
				label: "Email",
			},
			password: {
				type: types_202516519.BookPropertyType.ENCRYPTED,
				label: "Password",
			},
			type: {
				type: types_202516519.BookPropertyType.ENUM_NUMBER,
				label: "Type Code",
				values: [1, 2, 3],
				optional: true,
				default: 1,
			},
			type_str: {
				type: types_202516519.BookPropertyType.ENUM_STRING,
				label: "Type String",
				values: ["Red", "Green", "Blue"],
			},
			price: {
				type: types_202516519.BookPropertyType.FLOAT,
				label: "Price",
				// validation: {
				//   min: 0
				// }
			},
			unit: {
				type: types_202516519.BookPropertyType.INTEGER,
				label: "Unit",
				// validation: {
				//   min: 0,
				//   max: 10
				// }
			},
			categories: {
				type: types_202516519.BookPropertyType.SET_NUMBER,
				label: "Categories",
				// validation: {
				//   length: 2
				// },
				default: [1, 2],
				optional: true,
			},
			categories_str: {
				type: types_202516519.BookPropertyType.SET_STRING,
				label: "Categories string",
			},
			pub_date: {
				type: types_202516519.BookPropertyType.TIME,
				label: "Pub date",
				// validation: {
				//   min: new Date('2011-03-08')
				// }
			},
		},
	},
} as const;
