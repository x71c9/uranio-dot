/**
 * Custom book
 *
 * @packageDocumentation
 */

// import uranio from 'uranio';

// export const atom_book:uranio.types.Book = {
//   customer:{
//     plural: 'customers',
//     security:{
//       type: uranio.types.BookSecurityType.UNIFORM,
//       _w: uranio.types.BookPermissionType.PUBLIC
//     },
//     properties: {
//       first_name: {
//         type: uranio.types.BookPropertyType.TEXT,
//         label: 'First name'
//       },
//       last_name: {
//         type: uranio.types.BookPropertyType.TEXT,
//         label: 'Last name',
//       }
//     },
//     dock:{
//       url: '/customers'
//     }
//   },
//   mykart: {
//     security: {
//       type: uranio.types.BookSecurityType.UNIFORM,
//       _w: uranio.types.BookPermissionType.PUBLIC
//     },
//     plural: 'mykarts',
//     properties:{
//       title:{
//         type: uranio.types.BookPropertyType.TEXT,
//         // label: `${some}-titless`
//         label: `titless`,
//       }
//     },
//     dock: {
//       url: '/mykart'
//     },
//     // bll: () => {
//     //   console.log(some + `s`);
//     //   return new MYBLL();
//     // }
//   },
//   product: {
//     security:{
//       type: uranio.types.BookSecurityType.UNIFORM,
//       _w: uranio.types.BookPermissionType.PUBLIC
//     },
//     properties: {
//       title: {
//         type: uranio.types.BookPropertyType.TEXT,
//         label: 'Title',
//         validation: {
//           alphanum: true,
//           contain_digit: false,
//           max: 7
//         },
//         on_error: () => 'TITLE'
//       },
//       description: {
//         type: uranio.types.BookPropertyType.LONG_TEXT,
//         label: 'Description',
//       },
//       kart: {
//         type: uranio.types.BookPropertyType.ATOM,
//         label: 'Kart',
//         atom: 'mykart',
//         optional: true
//       },
//       users: {
//         type: uranio.types.BookPropertyType.ATOM_ARRAY,
//         label: 'Users',
//         atom: 'user',
//         optional: true
//       },
//       active: {
//         type: uranio.types.BookPropertyType.BINARY,
//         label: 'Active',
//       },
//       email: {
//         type: uranio.types.BookPropertyType.EMAIL,
//         label: 'Email',
//       },
//       password: {
//         type: uranio.types.BookPropertyType.ENCRYPTED,
//         label: 'Password',
//       },
//       type: {
//         type: uranio.types.BookPropertyType.ENUM_NUMBER,
//         label: 'Type Code',
//         values: [1,2,3],
//         optional: true,
//         default: 1
//       },
//       type_str: {
//         type: uranio.types.BookPropertyType.ENUM_STRING,
//         label: 'Type String',
//         values: ['Red','Green','Blue'],
//         optional: true
//       },
//       price: {
//         type: uranio.types.BookPropertyType.FLOAT,
//         label: 'Price',
//         validation: {
//           min: 10
//         }
//       },
//       unit: {
//         type: uranio.types.BookPropertyType.INTEGER,
//         label: 'Unit',
//         // validation: {
//         //   min: 0,
//         //   max: 10
//         // }
//       },
//       categories: {
//         type: uranio.types.BookPropertyType.SET_NUMBER,
//         label: 'Categories',
//         // validation: {
//         //   length: 2
//         // },
//         default: [1,2],
//         optional: true
//       },
//       categories_str: {
//         type: uranio.types.BookPropertyType.SET_STRING,
//         label: 'Categories string',
//         optional: true
//       },
//       pub_date: {
//         type: uranio.types.BookPropertyType.TIME,
//         label: 'Pub date',
//         // validation: {
//         //   min: new Date('2011-03-08')
//         // }
//       },
//     },
//     dock: {
//       url: '/products'
//     }
//   }
// };
