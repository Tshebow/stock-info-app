import "./Report.css";
import {useDispatch, useSelector} from "react-redux";
import {Button, Spinner, Text, VStack} from "@chakra-ui/react";
import {useCallback, useState} from "react";
import {clearOptions} from "../stockOptions/stockOptionsSlice.js";
import {addError, addSuccess, addWarning} from "../notification/notificationSlicer.js";
import {geminiApi} from "../../api/geminiApi.js";
import {polygonApi} from "../../api/polygonApi.js";
import ReactMarkdown from "react-markdown";


const Report = () => {
  const dispatch = useDispatch();
  const stockOptions = useSelector(state => state.stockOptions.history);
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const generateReport = useCallback(async () => {
    if (!stockOptions.length) {
      dispatch(addWarning("No stock options selected!"));
    } else {
      const fetchData = async () => {
        const tickerData = await polygonApi.get(stockOptions[0]);
        console.log(tickerData);
        if (tickerData?.resultsCount === 0) throw new Error(`No results found for given stock - ${stockOptions[0]}`);
        return geminiApi.get(JSON.stringify(tickerData));
      }

      setLoading(true);
      try {
        const response = await fetchData();
        setStory(response.text)
        dispatch(addSuccess("Stock info retrieved!"));
      } catch (e) {
        dispatch(addError(e.message));
      } finally {
        setLoading(false);
      }


      dispatch(clearOptions());
    }
  }, [dispatch, stockOptions]);

  const clearStory = useCallback(() => setStory(""), []);

  return (
    <>
      <Button onClick={generateReport}> Generate Report </Button>
      {
        loading &&
        <VStack className="spinner">
          <Spinner size="lg" color="blue.300" />
          <Text color="blue.300">Loading...</Text>
        </VStack>
      }
      {
        story &&
        <>
          <Button onClick={clearStory}>Clear</Button>
          <ReactMarkdown>{story}</ReactMarkdown>
        </>
      }
    </>
  );
}

export default Report;