const express = require("express");
const app = express();
const session = require("express-session");
const fs = require("fs");

app.use(
	session({
		secret: "secret code",
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: false,
			maxAge: 1000 * 60 * 60 //쿠기 유효시간 1시간
		}
	})
);

const server = app.listen(3000, () => {
	console.log("써버 구동중 port:3000");
});

let sql = require("./sql.js");
// sql.js에서 쿼리문 수정해도 서버 껐다안켜도 되게 만들어주는 코드 *실무에서도 많이쓰임
fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
	console.log("sql변경시 재시작 없이 반영됨");
	delete require.cache[require.resolve("./sql.js")];
	sql = require("./sql.js");
});

const db = {
	port: 3308,
	database: "dev",
	connectionLimit: 10,
	host: "127.0.0.1",
	user: "root",
	password: "root"
};

const dbPool = require("mysql").createPool(db);

app.post("/api/login", async (request, res) => {
	request.session["email"] = "jaesangv@naver.com";
	res.send("login okay");
});

app.post("/api/logout", async (request, res) => {
	request.session.destroy();
	res.send("logout ok");
});

app.post("/api/:alias", async (request, res) => {
	if (!request.session.email) {
		return res.status(401).send({error: "you need to login"});
	}
	try {
		res.send(await req.db(request.params.alias));
	} catch (err) {
		res.status(500).send({
			error: err
		});
	}
});

const req = {
	async db(alias, param = [], where = "") {
		return new Promise((resolve, reject) =>
			dbPool.query(sql[alias].query + where, param, (error, rows) => {
				if (error) {
					if (error.code != "ER_DUP_ENTRY") console.log(error);
					resolve({
						error
					});
				} else resolve(rows);
			})
		);
	}
};
