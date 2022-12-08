import { Link } from '@/components';
import kebabCase from 'src/lib/utils/kebabCase';

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary hover:text-primary-focus"
    >
      {text.split(' ').join('-')}
    </Link>
  );
};

export default Tag;
