const Mock = require('mockjs');
const data = Mock.mock({
  'list|6': [{
    'id|+1': 1,
    "name|1": [Mock.Random.cname(),Mock.Random.cname(),Mock.Random.cname(),Mock.Random.cname()],
    'desc': '@date(yyyy-MM-dd HH:mm:ss)',
    'itemData|1-3': [Mock.Random.city(), Mock.Random.province(),Mock.Random.cname()]
  }]
})

export default data