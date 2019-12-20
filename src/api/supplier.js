import request from "@/utils/request"

export default {
  // 获取列表
  getList(){
    return request({
      url:'/supplier/list',
      method:'get'
    })
  },
  // 分页查询
  search(page, size, searchMap) {
    return request({
      url: `/supplier/list/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  // 新增
  add(pojo) {
    return request({
      url: '/supplier',
      method: 'post',
      data: pojo
    })
  },
  // 查询
  getById(id) {
    return request({
      url: `/supplier/${id}`,
      method: 'get'
    })
  },
  // 更新
  update(pojo) {
    return request({
      url: `/supplier/${pojo.id}`,
      method: 'put',
      data: pojo
    })
  },
  //删除供应商信息
  deleteById(id) {
    return request({
      url: `/member/${id}`,
      method: 'delete'
    })
  }
}