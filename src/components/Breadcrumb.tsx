import Text from "./styles/Text";

type BreadcrumbProps = {
  paths: string[];
};

const Breadcrumb = ({ paths }: BreadcrumbProps) => {
  const path: string = paths.join(" / ");

  return <Text>{path}</Text>;
};

export default Breadcrumb;
