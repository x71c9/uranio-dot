
import * as book_types from './types';

const core_atoms_book = {
	superuser: {
		security: {
			type: book_types.BookSecurityType.UNIFORM,
			_r: null
		},
		api:{
			url: 'superuser'
		},
		properties: {
			email: {
				type: book_types.BookPropertyType.EMAIL,
				label: 'Email',
				unique: true,
				on_error: () => {
					return 'email@email.com';
				}
			},
			password: {
				type: book_types.BookPropertyType.ENCRYPTED,
				label: 'Password'
			}
		}
	},
	user: {
		securiy: {
			type: book_types.BookSecurityType.GRANULAR
		},
		api:{
			url: 'user'
		},
		properties: {
			email: {
				type: book_types.BookPropertyType.EMAIL,
				label: 'Email',
				unique: true,
			},
			password: {
				type: book_types.BookPropertyType.ENCRYPTED,
				label: 'Password'
			},
			groups: {
				type: book_types.BookPropertyType.ATOM_ARRAY,
				atom: 'group',
				label: 'Groups',
				optional: true
			}
		}
	},
	group: {
		api:{
			url: 'group'
		},
		properties: {
			name: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Name'
			}
		}
	}
} as const;

export const atom_book = {
	...core_atoms_book,
} as const;
