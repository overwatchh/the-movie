import TopRatedMovies from "@/containers/TopRatedMovies";
import BaseLayout from "@/layouts/BaseLayout";

const Home = () => {
  return (
    <div>
      <BaseLayout>
        <TopRatedMovies />
      </BaseLayout>
    </div>
  );
};

export default Home;
