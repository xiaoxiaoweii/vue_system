import request from "@/utils/request";

export default {
  //获取会员列表数据
  getList() {
    return request({
      url: '/member/list',
      method: 'get',
    })
  },
  //分页搜索方法
  search(page, size, searchMap) {
    return request({
      url: `/member/list/search/$(page)/$(size)`,
      method: 'post',
      data: searchMap
    })
  },
  // 新增会员数据
  add(pojo) {
    return request({
      url: `/member`,
      method: 'post',
      data: pojo
    })
  },
  // 通过id查询
  getById(id) {
    return request({
      url: `/member//${id}`,
      method: 'get',
    })
  },
  //更新数据
  update(pojo) {
    return request({
      url: `/member/${pojo.id}`,
      method: 'put',
      data: pojo
    })
  },
  //删除用户
  deleteById(id) {
    return request({
      url: `/member/${id}`,
      method: 'delete'
    })
  }
}
