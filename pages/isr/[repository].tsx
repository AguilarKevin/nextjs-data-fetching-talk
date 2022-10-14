import {Box, Stack, Text} from '@chakra-ui/react'
import {useRouter} from 'next/router'

export interface IncrementalStaticGenPageProps {
  repo: any
}

// @ts-ignore
export async function getStaticProps({params}) {
  const data = await fetch(
    `https://api.github.com/repos/aguilarkevin/${params.repository}`,
    {
      headers: {
        authorization: `Bearer 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`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err))

  console.log(data)

  return {
    props: {
      repo: data,
    },
    revalidate: 40,
  }
}

export async function getStaticPaths() {
  const data = await fetch('https://api.github.com/users/aguilarkevin/repos', {
    headers: {
      authorization: `Bearer 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`,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err))

  console.log(data)
  // @ts-ignore
  const paths = data.map((repo) => ({
    params: {
      repository: repo.name,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default function IncrementalStaticGenPage({
  repo,
}: IncrementalStaticGenPageProps) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Stack>
      <Box>Incremental Static Generation Page</Box>
      <Text fontSize="7xl">{repo?.name ?? ''}</Text>
    </Stack>
  )
}
