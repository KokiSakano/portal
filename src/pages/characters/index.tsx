import { Counter } from '@/components/Features/characters/Counter';
import { FindReplace } from '@/components/Features/characters/FindReplace';
import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useId } from 'react';

const Index: NextPage = () => {
  const id = useId();
  return (
    <Box maxW="1200px" margin="0 auto" p="0 40px">
      <Box aria-labelledby={`characters_header_${id}`} as="section" pt="8">
        <Heading id={`characters_header_${id}`}>Characters</Heading>
        <Tabs>
          <TabList>
            <Tab>文字数カウント</Tab>
            <Tab>検索&置き換え</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Counter />
            </TabPanel>
            <TabPanel>
              <FindReplace />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Index;
