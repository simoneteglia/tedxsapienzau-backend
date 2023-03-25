import { db } from "../db.js";

export const joinStudent = (req, res) => {
	const q =
		"INSERT INTO joinusstudent (`email`, `nome`, `cognome`, `contenuto`) VALUES (?)";

	const values = [
		req.body.email,
		req.body.nome,
		req.body.cognome,
		req.body.contenuto,
	];
	db.query(q, [values], (err, data) => {
		if (err) return res.status(500).json(err);
		return res.status(200).json("OK");
	});
};

// export const join1 = (req, res) => {
// 	const q =
// 		"INSERT INTO join1 (`email`,`nome`,`telefono`,`messaggio`) VALUES (?)";

// 	db.query(q, (err, data) => {
// 		if (err) return res.status(500).json(err);
// 		return res.status(200).json("Controlla i campi!");
// 	});
// };
