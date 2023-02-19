import { useAppSelector } from "@/hooks/store";
import { ViewType as EViewType } from "@/types/display";
import cln from "classnames";
type ViewWrapperProps = {
  children: React.ReactNode;
};
const ViewWrapper: React.FC<ViewWrapperProps> = ({ children }) => {
  const viewType = useAppSelector((state) => state.display.view);
  return (
    <div
      className={cln({
        list: viewType === EViewType.list,
        grid: viewType === EViewType.grid,
      })}
    >
      {children}
    </div>
  );
};

export default ViewWrapper;
