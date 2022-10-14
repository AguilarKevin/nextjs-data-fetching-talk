import {Center, Stack, Text} from '@chakra-ui/react'

export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <Center>
      <Stack lineHeight="shorter" letterSpacing="tighter">
        <Text fontWeight="400" fontSize="3xl" textColor="white">
          Nerdify Dev Talks
        </Text>
        <Text
          fontWeight="800"
          fontSize="8xl"
          textColor="cyan.500"
          backgroundSize="2400px 200px"
          background="-webkit-linear-gradient(left, #FF0080, #7928CA, #FF0080)"
          sx={{
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationFillMode: 'forwards',
            animationName: 'textGradient',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          __css={{
            '@keyframes textGradient': {
              '0%': {
                'background-position': '0 2400px',
              },
              '100%': {
                'background-position': '2400px 0',
              },
            },
          }}
        >
          Data Fetching Methods Example
        </Text>
      </Stack>
    </Center>
  )
}
