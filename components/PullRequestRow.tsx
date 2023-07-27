import { Anchor, Flex, Box, Text, ColorSwatch, Badge, useMantineTheme } from "@mantine/core";

export interface PullRequest {
  title: string;
  url: string;
  isAuthor: boolean;
  isReviewer: boolean;
  hasUpdates: boolean;
  needsAttention: boolean;
  repo: string;
}

export default function PullRequestRow({ pr }: { pr: PullRequest }) {
  const theme = useMantineTheme();

  let indicatorColor = theme.colors.gray[4];
  if (pr.needsAttention) {
    indicatorColor = theme.colors.orange[4];
  } else if (pr.hasUpdates) {
    indicatorColor = theme.colors.blue[4];
  }

  return (
    <Flex p={16}>
      <Anchor href={pr.url} target="_blank" color="black" underline={false}>
        <Flex>
          <Box mr={16} pt={10}>
            <ColorSwatch color={indicatorColor} size={8} />
          </Box>
          <Box>
            <Text size="lg" weight={600}>
              {pr.title}
            </Text>
            <Box mt={-4}>
              <Text size="sm" weight={500} color="gray.7">
                {pr.repo}
              </Text>
            </Box>
          </Box>
          {pr.isAuthor && (
            <Badge variant="filled" ml={16} mt={4}>
              Author
            </Badge>
          )}
          {pr.isReviewer && (
            <Badge variant="filled" ml={16} color="grape" mt={4}>
              Reviewer
            </Badge>
          )}
          {pr.needsAttention && (
            <Badge variant="filled" ml={16} color="orange" mt={4}>
              Needs Attention
            </Badge>
          )}
        </Flex>
      </Anchor>
    </Flex>
  );
}
