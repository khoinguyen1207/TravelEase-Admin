import { Button, Checkbox, Form, Input } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='bg-secondary min-h-screen flex items-center justify-center'>
            <div className=' bg-yankeesBlue rounded-xl p-10 w-[450px]'>
                <div className='w-24 h-24 m-auto'>
                    <img src={logo} alt='logo' className='w-full h-full' />
                </div>
                <h3 className='text-white text-center'>Welcome Back</h3>
                <div className='mt-1 mb-4 text-gray-400 text-center'>Please enter your credentials to sign in!</div>
                <Form layout='vertical' requiredMark={false}>
                    <Form.Item label='Email' name='email' className='w-full' rules={[{ required: true }]}>
                        <Input placeholder='Email' suffix={<MailOutlined />} />
                    </Form.Item>
                    <Form.Item label='Password' name='password' className='w-full' rules={[{ required: true }]}>
                        <Input.Password placeholder='Password' />
                    </Form.Item>
                    <div className='flex justify-between py-4'>
                        <Checkbox>Remember Me</Checkbox>
                        <Link to={'/forgot'} className='text-primary'>
                            Forgot Password?
                        </Link>
                    </div>
                    <Button block type='primary' htmlType='submit' className='mb-5'>
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
    )
}
