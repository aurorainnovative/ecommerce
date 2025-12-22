import { useAuth } from "../hooks/useAuth"

const ProfilePage = () => {
  const {user} = useAuth()
  return (
    <div className="h-screen w-full grid place-content-center text-2xl">
      <h1>Name : {user?.name}</h1>
      <p>Email : {user?.email}</p>
    </div>
  )
}

export default ProfilePage