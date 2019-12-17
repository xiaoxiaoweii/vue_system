import request from "@/utils/request";

export default {
  getList() {
    const req = request({
      methods: 'get',
      url: '/db.json'
    })
    return req
  }
};