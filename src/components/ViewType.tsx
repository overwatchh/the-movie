import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import { ViewType as EViewType } from "@/types/display";

type ViewTypeProps = {
  type: EViewType;
  onClick: (type: EViewType) => void;
};

const ViewType: React.FC<ViewTypeProps> = ({ type, onClick }) => {
  const handleListViewIconClick = () => {
    onClick(EViewType.list);
  };
  const handleGridViewIconClick = () => {
    onClick(EViewType.grid);
  };
  return (
    <div className="ViewType">
      {type === EViewType.list ? (
        <div onClick={handleListViewIconClick}>
          <ViewListIcon />
        </div>
      ) : (
        <div onClick={handleGridViewIconClick}>
          <GridViewIcon />
        </div>
      )}
    </div>
  );
};

export default ViewType;
