class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    const queryObject = { ...this.queryString };
    const excludedFields = ["page", "limit", "fields", "sort"];
    excludedFields.forEach((item) => delete queryObject[item]);

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
