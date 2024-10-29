function getAll(Model) {
  return async function (req, res) {
    try {
      const data = await Model.find();

      res.status(200).json({ status: "success", data });
    } catch (err) {
      res.status(400).json({ status: "error", message: "Could not fetch" });
    }
  };
}

module.exports = { getAll };
