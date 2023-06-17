function successResponse(data) {
  return {
    success: true,
    data: data,
    errors: null,
  };
}

function errorResponse(code, message) {
  return {
    success: false,
    data: null,
    errors: {
      code: code,
      message: message,
    },
  };
}

module.exports = {
  successResponse,
  errorResponse,
};
