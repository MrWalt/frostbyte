// READ
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

function getOne(Model) {
  return async function (req, res) {
    try {
      const data = await Model.findById(req.params.id);

      if (!data) {
        res.status(404).json({
          status: "error",
          message: "Could not find document with that ID",
        });
        return;
      }

      res.status(200).json({ status: "success", data });
    } catch (err) {
      res
        .status(400)
        .json({ status: "error", message: "Could not find this document" });
    }
  };
}

// CREATE
function createOne(Model) {
  return async function (req, res) {
    try {
      const data = await Model.create(req.body);

      res.status(201).json({
        status: "succes",
        data,
      });
    } catch (err) {
      res
        .status(400)
        .json({ status: "error", message: "Could not create this document" });
    }
  };
}

// UPDATE
function updateOne(Model) {
  return async function (req, res) {
    try {
      const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      res.status(200).json({ status: "success", data });
    } catch (err) {
      res
        .status(400)
        .json({ status: "error", message: "Could not update this document" });
    }
  };
}

// DELETE
function deleteOne(Model) {
  return async function (req, res) {
    try {
      await Model.findByIdAndDelete(req.params.id);

      res.status(204).json({ status: "success" });
    } catch (err) {
      res
        .status(400)
        .json({ status: "error", message: "Could not delete this document" });
    }
  };
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };
