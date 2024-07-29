import { Text } from './Text/Text';
import { Title } from './Title/Title';

const Typography: {
  Text: typeof Text;
  Title: typeof Title;
} = { Text, Title };

export { Text, Title, Typography };
