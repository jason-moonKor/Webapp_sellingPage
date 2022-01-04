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

app.use(
	express.json({
		limit: "50mb"
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
	// request.session["email"] = "jaesangv@naver.com";
	// res.send("login okay");
	try {
		await req.db("signUp", request.body.param);
		if (request.body.param.length > 0) {
			for (let key in request.body.param[0]) {
				request.session[key] = request.body.param[0][key];
			}
			res.send(request.body.param[0]);
		} else {
			res.send({
				error: "관리자에게 문의하세요 에러!"
			});
		}
	} catch (err) {
		res.send({
			error: "DB access error"
		});
	}
});

app.post("/api/logout", async (request, res) => {
	request.session.destroy();
	res.send("logout ok");
});

app.post("/api/:alias", async (request, res) => {
	// if (!request.session.email) {
	// 	return res.status(401).send({error: "you need to login"});    //로그인했는지 검증하는 부분
	// }
	try {
		res.send(await req.db(request.params.alias, request.body.param));
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
