class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter(extraExcluded = []) {
    const queryObject = { ...this.queryString };
    const excludedFields = ["page", "limit", "fields", "sort"];

    extraExcluded.forEach((item) => excludedFields.push(item));

    excludedFields.forEach((item) => delete queryObject[item]);

    // Check if the inStockOnly query is there, if it is filter for stock only and then delete the property to prevent a re-find with stock: true
    if (queryObject?.stock) {
      this.query = this.query.find({ stock: { $ne: 0 } });
      delete queryObject.stock;
    }

    if (queryObject?.minPrice) {
      this.query = this.query.find({
        price: { $gte: queryObject.minPrice },
      });
      delete queryObject.minPrice;
    }

    if (queryObject?.maxPrice) {
      this.query = this.query.find({
        price: { $lte: queryObject.maxPrice },
      });
      delete queryObject.maxPrice;
    }

    if (queryObject?.search) {
      this.query = this.query.find({
        title: { $regex: queryObject.search, $options: "i" },
      });
      delete queryObject.search;
    }

    this.query = this.query.find(queryObject);

    return this;
  }
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(".").join(" ");

      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-dateAdded");
    }

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
