import {
  Box,
  Skeleton,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Textarea,
} from '@chakra-ui/react';
import { useCounter } from './useCounter';

export const Counter = (): JSX.Element => {
  const { value, count, isPending, handleChange } = useCounter();
  return (
    <Box>
      <Textarea
        value={value}
        onChange={handleChange}
        placeholder="ここに文字を入力してください"
        height="256px"
      />
      <Stat>
        <StatLabel fontSize="2xl">文字数</StatLabel>
        <Skeleton isLoaded={!isPending}>
          <StatNumber fontSize="2xl">{count}</StatNumber>
        </Skeleton>
        <StatHelpText fontSize="xl">
          🇯🇵や👨🏻‍💻、𩸽などの文字数も1文字としてカウントされます。
        </StatHelpText>
      </Stat>
    </Box>
  );
};
