
module.exports = {
  host: process.env.HOST,
  port: process.env.PORT || 3000,
  secret: 'secret12345',
  expireTime: 2592000, // 30 days
  minimumAge: 55, // 30 days

  dbURL: () => {
    //return 'mongodb+srv://plater:abc.123@cluster0.m3zv1.mongodb.net/platers-data'
    return 'mongodb+srv://aijan_dba:K9l0dyp2HRUiSoVu@cluster0.sjzxt0e.mongodb.net/?retryWrites=true&w=majority'
  },
  
  iApp : {
    apiKey : "kooJEI5fe2Uc3Lr6JlJJa444slKq7sL7",
  },
  idFy: {
    task_id: "74f4c926-250c-43ca-9c53-453e87ceacd1",
    group_id: "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
    apikey: "ef5582d0-b8e5-4058-80f5-b015eb2c3e73",
    accountId: "212c5933c7d4/e67be15f-bc72-4024-b9b5-3a6f76427b49",
  },
  brainTree: {
    merchantId: 'f9vwst3bcjjwmxfv',
    publicKey: 'dtkbkztsvhkyn6gs',
    privateKey: '971df95a63d6d2411883f61ce1ffcad1'
  },
  scrap: {
    "news": "https://thethaiger.com/news/#mvp-tab-col1",
    "news_id": "63661add8e6f27ad68613eff",
    "stock_markets": "https://www.thaicapitalist.com/",
    "stock_markets_id":"63661af48e6f27ad68613f02",
    "food": "http://dailydeliciousthai.blogspot.com/",
    "food_id":"63661b038e6f27ad68613f05",
    "meditation": "https://phuket-meditation.com/dharana-blog/meditative-lifestyle/",
    "meditation_id":"63661b188e6f27ad68613f08",
    "business": "https://www.thailand-business-news.com/business",
    "investment": "https://www.thailand-business-news.com/investment",
    "business_id":"63661b578e6f27ad68613f0c",
    "spirituality": "https://www.myhora.com/",
    "spirituality_id":"63661b6c8e6f27ad68613f0f",
  }
 
};
