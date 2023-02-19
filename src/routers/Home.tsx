import NowPlayingMovies from "@/containers/NowPlayingMovies";
import BaseLayout from "@/layouts/BaseLayout";

const Home = () => {
  return (
    <div>
      <BaseLayout>
        <NowPlayingMovies />
      </BaseLayout>
    </div>
  );
};

export default Home;
