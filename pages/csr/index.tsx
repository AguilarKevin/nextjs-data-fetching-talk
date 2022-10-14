import {Image, Stack, Text} from '@chakra-ui/react'
import {Suspense, useEffect, useState} from 'react'

export default function ClientSideRenderingPage() {
  return (
    <Suspense>
      <UserProfile />
    </Suspense>
  )
}

function UserProfile() {
  const [userData, setUserData] = useState()

  useEffect(() => {
    const data = fetch('https://api.github.com/users/aguilarkevin')
      .then((res) => res.json())
      .then((data) => setUserData(data))
  }, [])

  return (
    <Stack textAlign="center">
      <Image
        rounded="full"
        // @ts-ignore
        src={userData?.avatar_url}
        // @ts-ignore
        alt={userData?.name}
      />
      <Text fontSize="4xl" fontWeight="500">
        {
          // @ts-ignore
          userData?.name ?? ''
        }
      </Text>
    </Stack>
  )
}
