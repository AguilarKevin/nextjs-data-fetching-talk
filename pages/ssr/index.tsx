import {Image, Stack, Text} from '@chakra-ui/react'

export interface ServerSidePageProps {
  avatarUrl: string
  name: string
}

// @ts-ignore
export async function getServerSideProps() {
  const data = await fetch('https://api.github.com/users/aguilarkevin')
    .then((res) => res.json())
    .then((data) => data)

  return {
    props: {
      avatarUrl: data.avatar_url,
      name: data.name,
    },
  }
}

export default function ServerSidePage({avatarUrl, name}: ServerSidePageProps) {
  return (
    <Stack textAlign="center">
      <Text fontSize="8xl">Pagina renderizada en el servidor</Text>
      <Image
        rounded="full"
        // @ts-ignore
        src={avatarUrl}
        // @ts-ignore
        alt={name}
        width="200px"
        height="200px"
      />
      <Text fontSize="4xl" fontWeight="500">
        {
          // @ts-ignore
          name ?? ''
        }
      </Text>
    </Stack>
  )
}
