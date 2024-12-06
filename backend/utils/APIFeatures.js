class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter(skipManufacturer = false) {
    const queryObject = { ...this.queryString };
    const excludedFields = [
      "page",
      "limit",
      "fields",
      "sort",
      `${skipManufacturer ? "manufacturer" : null}`,
    ];
    excludedFields.forEach((item) => delete queryObject[item]);

    // Check if the inStockOnly query is there, if it is filter for stock only and then delete the property to prevent a re-find with stock: true
    if (queryObject?.stock) {
      this.query = this.query.find({ stock: { $ne: 0 } });
      delete queryObject.stock;
    }

    this.query = this.query.find(queryObject);

    return this;
  }
  paginate() {
    const page = this.queryString.page || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
