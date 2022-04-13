import { useRouter } from 'next/router'

function UserProfile() {
    const router = useRouter()
    const { username } = router.query
    return (<h1>Hola {username}</h1>)
}

export default UserProfile