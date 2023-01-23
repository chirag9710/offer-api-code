
module.exports = {
  host: process.env.HOST,
  port: process.env.PORT || 3000,
  secret: 'secret12345',
  expireTime: 2592000, // 30 days
  minimumAge: 55, // 30 days

  dbURL: () => {
    return 'mongodb+srv://aijan_dba:K9l0dyp2HRUiSoVu@cluster0.sjzxt0e.mongodb.net/?retryWrites=true&w=majority'
  },
  
};
