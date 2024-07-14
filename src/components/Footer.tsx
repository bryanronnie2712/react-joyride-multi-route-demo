import { Link } from 'react-router-dom';
import { Box, Spacer } from '@gilbarbara/components';

import Maze from './Maze';

function Footer() {
  return (
    <Box
      align="center"
      as="footer"
      bg="white"
      border={[{ side: 'top' }]}
      bottom={0}
      display="flex"
      height={64}
      justify="space-between"
      left={0}
      position="fixed"
      px="md"
      right={0}
      zIndex={50}
    >
      <Maze />
      <Spacer distribution="center" flex ml="xs">
        <Link to="/">Multi Route</Link>
      </Spacer>
      <Box height={32} width={32} />
    </Box>
  );
}

export default Footer;
