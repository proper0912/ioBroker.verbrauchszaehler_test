const object_connection = {
	'aktive': {
		type: 'state',
		common: {
			name: `aktive`,
			type: `boolean`,
			role: `indicator`,
			def: false,
			read: true,
			write: false
		},
		native: {}
	}
}

module.exports = {object_connection};
	
