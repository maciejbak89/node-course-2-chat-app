var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		 var from = 'Maciek';
		 var text = 'Test message';
		 var message = generateMessage(from, text);

		 expect(message).toMatchObject({from, text});
		 expect(typeof message.createdAt).toBe('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Admin';
		var latitude = 42;
		var longitude = -87;
		var url = 'https://www.google.com/maps?q=42,-87';
		var message = generateLocationMessage(from, latitude, longitude);

		expect(message).toMatchObject({from, url});
		expect(typeof message.createdAt).toBe('number');
	});
});