export default function getById(req, res) {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "application/json");
  //   res.end(req.query.id);
  // Нижче те саме, але коротко
  res.json({ your: req.query.id });
}
