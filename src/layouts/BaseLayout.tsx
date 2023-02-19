import Tabs from "@/components/Tabs";
import { Container } from "@mui/material";
type BaseLayoutProps = {
  children: React.ReactNode;
};
const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Tabs />
      {children}
    </Container>
  );
};

export default BaseLayout;
