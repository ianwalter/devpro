"use client";

import { Container, Box, Divider } from "@mantine/core";
import Header from "@/components/Header";
import PullRequestRow from "@/components/PullRequestRow";

const prs = [
  {
    id: 1,
    title: "Add more logs to vendor",
    url: "https://github.com/ianwalter/devpro/pull",
    isAuthor: true,
    isReviewer: false,
    hasUpdates: false,
    needsAttention: false,
    repo: 'monorepo',
  },
  {
    id: 2,
    title: "Update packages",
    url: "https://github.com/ianwalter/devpro/pull",
    isAuthor: false,
    isReviewer: true,
    hasUpdates: true,
    needsAttention: false,
    repo: 'mobile',
  },
  {
    id: 3,
    title: "Install OrbStack in bootstrap script",
    url: "https://github.com/ianwalter/devpro/pull",
    isAuthor: false,
    isReviewer: false,
    hasUpdates: false,
    needsAttention: false,
    repo: 'monorepo',
  },
  {
    id: 4,
    title: "Fix email template usage",
    url: "https://github.com/ianwalter/devpro/pull",
    isAuthor: false,
    isReviewer: false,
    hasUpdates: false,
    needsAttention: true,
    repo: 'mobile',
  },
];

export default function HomePage() {
  return (
    <Container>
      <Header />
      <Divider />
      {prs.map((pr) => (
        <Box key={pr.id}>
          <PullRequestRow pr={pr} />
          <Divider />
        </Box>
      ))}
    </Container>
  );
}
