var expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Maciek',
			room: 'Node Course'
		}, {
			id: '2',
			name: 'Bartek',
			room: 'Python Course'
		}, {
			id: '3',
			name: 'Mike',
			room: 'Node Course'
		}];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
		 	id: '123',
		 	name: 'Maciek',
		 	room: 'Messi Fans'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var userID = '3';
		var user = users.removeUser(userID);

		expect(user.id).toBe(userID);
		expect(users.users.length).toBe(2);
		expect(users.users).toEqual([{
			id: '1',
			name: 'Maciek',
			room: 'Node Course'
		}, {
			id: '2',
			name: 'Bartek',
			room: 'Python Course'
		}]);
	});

	it('should not remove user', () => {
		var userID = '4';
		var user = users.removeUser(userID);

		expect(user).toBeFalsy();
		expect(users.users.length).toBe(3);
		expect(users.users).toEqual([{
			id: '1',
			name: 'Maciek',
			room: 'Node Course'
		}, {
			id: '2',
			name: 'Bartek',
			room: 'Python Course'
		}, {
			id: '3',
			name: 'Mike',
			room: 'Node Course'
		}]);
	});

	it('should find user', () => {
		var userID = '1';
		var user = users.getUser(userID);

		expect(user.id).toBe(userID);
	});

	it('should not find user', () => {
		var userID = '4';
		var user = users.getUser(userID);

		expect(user).toBeFalsy();
	});

	it('should return names for room: Node Course', () => {
		var userList = users.getUserList('Node Course');

		expect(userList).toEqual(['Maciek', 'Mike']);
	});	

	it('should return names for room: Python Course', () => {
		var userList = users.getUserList('Python Course');

		expect(userList).toEqual(['Bartek']);
	});	
});