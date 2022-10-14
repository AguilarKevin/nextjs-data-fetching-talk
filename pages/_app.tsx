import type {AppProps} from 'next/app'
import {Box, Center, ChakraProvider, Flex, Stack, Text} from '@chakra-ui/react'
import Link from 'next/link'

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: 'csr',
    label: 'CSR Example',
  },
  {
    href: 'ssr',
    label: 'SSR Example',
  },
  {
    href: 'ssg',
    label: 'SSG Example',
  },
  {
    href: 'isr',
    label: 'ISR Example',
  },
]

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider>
      <Stack backgroundColor="#161616" height="100vh" textColor="white">
        <Flex paddingBlock="80px" paddingInline="120px" gap="8">
          {links.map(({href, label}) => (
            <Link passHref href={href}>
              <Text
                textColor="white"
                fontSize="2xl"
                fontWeight="500"
                cursor="pointer"
              >
                {label}
              </Text>
            </Link>
          ))}
        </Flex>
        <Center justifyContent="center" height="70%">
          <Component {...pageProps} />
        </Center>
      </Stack>
    </ChakraProvider>
  )
}

export default MyApp
