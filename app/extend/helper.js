'use stricts'

const bcrypt = require('bcryptjs')
module.exports = {
  /**
   * 加密
   */
  bhash: str => {
    return bcrypt.hashSync(str, 10)
  },

  /**
   * 比对
   */
  bcompare: (str, hash) => {
    return bcrypt.compareSync(str, hash)
  },

  /**
   * 错误码
   */
  errorCode: {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  },

  /**
   * 处理成功请求后的响应
   */
  success: ({ctx, code=200, res=null, msg='success'}) => {
    ctx.status = 200
    ctx.body = {
      code: code,
      message: ctx.helper.errorCode[code],
      data: res
    }
  },

  /**
   * 处理失败请求后的响应
   */
  fail: ({ctx, code=500, res=null, msg='fail'}) => {
    ctx.status = 200
    ctx.body = {
      code: code,
      message: ctx.helper.errorCode[code],
      data: res
    }
  }
}