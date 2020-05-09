const advancedResults = (model, populate) => async (req, res, next) => {
  // Data filtering
  let query;
  //   Copy req.query
  const reqQuery = { ...req.query };

  //   Fields to exclude
  const removeFields = ['select', 'sort', 'limit', 'page'];

  // Loop over removeFields and delete them from reQuery
  removeFields.forEach((param) => delete reqQuery[param]);
  console.log(reqQuery);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);
  //   Create operators ($gt,$lt, etc)
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  // Finding resources
  query = model.find(JSON.parse(queryStr));

  //   Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    console.log(fields);
    query = query.select(fields);
  }

  //   Sort fields
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }
  //   Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();
  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  // Execute query
  const results = await query;

  //   Pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results,
  };
  next();
};
module.exports = advancedResults;
