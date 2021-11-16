import{useDispatch, useSelector} from 'umi'
import { useState, useEffect } from 'react'


const Login = () => {
    let dispatch = useDispatch()
    //定义所需的变量
    let [vcode, setvcode] = useState('')
    // 接收数据
    let verifyCode = useSelector((state: any) => state.Login.loginInfo)
    //验证成功 登录
  const onFinish=(e:any)=>{
    dispatch({
      type:'Login/login',
      payload:e
    })
  }
  // 获取验证码
  let getData=() => {
    dispatch({
      type:'Login/getverifyCode',
      payload:''
    })
  }
  useEffect(() => {
    getData()
  }, [])
//   定义所需变量及修改
    return (
        <div>
            <div className={}>
            <img src="47.108.69.213:8081/admin/user/loginValidateCode" />
            </div>
        </div>
    )
}

export default Login