import {Box, Stack, Text} from '@chakra-ui/react'

export interface StaticSiteGenerationPageProps {}

export default function StaticSiteGenerationPage(
  props: StaticSiteGenerationPageProps
) {
  return (
    <Stack>
      <Box>Static Site Generation Page</Box>
      <Text>
        This page is statically generated at build time. It will not be updated
      </Text>
    </Stack>
  )
}
