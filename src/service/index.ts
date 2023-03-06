import { BASE_URL, TIME_OUT } from "./config";
import HYRequest from "./request";
// 可以创建很多实例
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export const hyRequest2 = new HYRequest({
  baseURL: "http://codercba.com:1888/airbnb/api/", 
  timeout: 8000,
  interceptors: {
    requestSeccessFn: (config) => {
      return config
    },
    requestFailureFn: (err) => {
      return err},
    responseSeccessFn: (res) => {
      return res
    },
    responseFailureFn: (err) => {
      return err
    }
  }
})
export default hyRequest
