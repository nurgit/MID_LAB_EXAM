var db = require('./db');

module.exports = {

	get: function (id, callback) {
		var sql = "select * from login where id=?";
		db.getResults(sql, [id], function (result) {
			if (result.length > 0) {
				callback(result[0]);
			} else {
				callback([]);
			}
		});
	},

	getAll: function (callback) {
		var sql = "select * from login";
		db.getResults(sql, null, function (result) {
			if (result.length > 0) {
				callback(result);
			} else {
				callback([]);
			}
		});
	},

	validate: function (user, callback) {
		var sql = "select * from login where username=? and password=?";
		db.getResults(sql, [user.uname, user.password], function (result) {
			if (result.length > 0) {
				callback(result[0].type);
			} else {
				callback(false);
			}
		});
	},

	insert: function (user, callback) {
		var sql = "insert into login values(?, ?, ?, ?)";

		db.execute(sql, ['', user.uname, user.password, user.type], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},

	update: function (user, callback) {
		var sql = "update login set username=?, password=?, type=? where id=?";
		db.execute(sql, [user.uname, user.password, user.type, user.id], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},

	delete: function (id, callback) {
		var sql = "delete from login where id=?";
		db.execute(sql, [id], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	}
}
