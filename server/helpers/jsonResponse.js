function successResponse(data) {
  return {
    success: true,
    data: data,
    errors: null,
  };
}

function errorResponse(code, message, attributes = null) {
  return {
    success: false,
    data: null,
    errors: {
      code: code,
      message: message,
      attributes: attributes,
    },
  };
}

module.exports = {
  successResponse,
  errorResponse,
};
