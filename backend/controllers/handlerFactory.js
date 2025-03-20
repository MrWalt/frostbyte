const APIFeatures = require("../utils/APIFeatures");

// READ
function getAll(Model, selectOptions, getFilters = false) {
  return async function (req, res) {
    try {
      // Getting the data from our database
      const features = new APIFeatures(
        Model.find().select(selectOptions),
        req.query
      )
        .filter()
        .sort()
        .paginate();

      const documents = await features.query;

      // For document count
      const countQuery = new APIFeatures(Model.find(), req.query).filter();
      const count = await countQuery.query.countDocuments();

      // This returns all filterable options for dynamic frontend filters
      // Socket, Type, Capacity, Brand
      let filtersQuery;
      const filtersObject = {};
      if (getFilters) {
        filtersQuery = new APIFeatures(
          Model.find().select(
            `manufacturer socket type capacity speed ddr -_id`
          ),
          req.query
        ).filter([
          "manufacturer",
          "socket",
          "type",
          "capacity",
          "speed",
          "ddr",
        ]);

        filtersQuery = await filtersQuery.query;

        filtersObject.capacities = [
          ...new Set(
            filtersQuery
              .filter((item) => item.capacity)
              .map((item) => item.capacity)
          ),
        ];

        filtersObject.types = [
          ...new Set(
            filtersQuery.filter((item) => item.type).map((item) => item.type)
          ),
        ];

        filtersObject.sockets = [
          ...new Set(
            filtersQuery
              .filter((item) => item.socket)
              .map((item) => item.socket)
          ),
        ];

        filtersObject.brands = [
          ...new Set(filtersQuery.map((item) => item.manufacturer)),
        ];

        filtersObject.speeds = [
          ...new Set(filtersQuery.map((item) => item.speed)),
        ];

        filtersObject.ddr = [...new Set(filtersQuery.map((item) => item.ddr))];
      }
      // For dynamic frontend filter. Returns the brands allowing user to filter by brands

      res.status(200).json({
        status: "success",
        data: documents,
        count,
        filters: filtersObject,
      });
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
        .status(404)
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
