import { PostProvider } from "../context/PostsContext";
import PageLayout from "../layout/PageLayout";

const AppContainer = ({ component }) => (
  <PostProvider>
    <PageLayout>{component}</PageLayout>
  </PostProvider>
);

export default AppContainer;
