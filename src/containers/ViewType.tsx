import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { changeViewType } from "@/store/slices/display";
import { ViewType as EViewType } from "@/types/display";
import ViewTypeComponent from "@/components/ViewType";

const ViewType = () => {
  const viewType = useAppSelector((state) => state.display.view);
  const dispatch = useAppDispatch();
  const handleChangeViewType = (viewType: EViewType) => {
    switch (viewType) {
      case EViewType.list:
        dispatch(changeViewType(EViewType.grid));
        break;
      case EViewType.grid:
        dispatch(changeViewType(EViewType.list));
        break;
      default:
        break;
    }
  };
  return (
    <div className="ViewTypeWrapper">
      <ViewTypeComponent type={viewType} onClick={handleChangeViewType} />
    </div>
  );
};

export default ViewType;
