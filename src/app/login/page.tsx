import LoginForm from "@/components/LoginForm"

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h2 className="text-2xl md:text-4xl">Welcome to our site</h2>
      <LoginForm />
    </div>
  )
}

export default LoginPage