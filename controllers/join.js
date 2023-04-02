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

export const joinPartner = (req, res) => {
	const q =
		"INSERT INTO joinuspartner (`email`,`nome`,`telefono`,`contenuto`) VALUES (?)";

	const values = [
		req.body.email,
		req.body.nome,
		req.body.telefono,
		req.body.contenuto,
	];

	db.query(q, [values], (err, data) => {
		if (err) return res.status(500).json(err);
		return res.status(200).json("OK");
	});
};

export const joinAdvise = (req, res) => {
	const q =
		"INSERT INTO joinusadvise (`nome`,`telefono`,`contenuto`) VALUES (?)";

	const values = [req.body.nome, req.body.telefono, req.body.contenuto];

	db.query(q, [values], (err, data) => {
		if (err) return res.status(500).json(err);
		return res.status(200).json("OK");
	});
};
