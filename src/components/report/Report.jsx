import {useDispatch, useSelector} from "react-redux";
import {Button} from "@chakra-ui/react";
import {useCallback} from "react";
import {clearOptions} from "../stockOptions/stockOptionsSlice.js";
import {addError, addSuccess, addWarning} from "../notification/notificationSlicer.js";


const Report = () => {
  const dispatch = useDispatch();
  const stockOptions = useSelector(state => state.stockOptions.history);

  console.log(stockOptions)

  const generateReport = useCallback(async () => {
    if (!stockOptions.length) {
      dispatch(addWarning("No stock options selected!"));
    } else {
      const fetchData = async () => {
        // TODO - api call
        console.log("Fetching report!!!");
      }

      // start loading
      try {
        const response = await fetchData();
        dispatch(addSuccess("Stock info retrieved!"));
      } catch (e) {
        dispatch(addError(e.message));
      } finally {
        // stop loading
      }


      dispatch(clearOptions());
    }
  }, [dispatch, stockOptions]);

  return (
    <>
      <Button onClick={generateReport}>Generate Report</Button>
    </>
  );
}

export default Report;