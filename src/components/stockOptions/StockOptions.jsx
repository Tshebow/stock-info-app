import "./StockOptions.css";
import {useDispatch, useSelector} from "react-redux";
import {addOption} from "./stockOptionsSlice.js";
import {Button, Group, Input, Text, VStack} from "@chakra-ui/react";
import {useCallback, useState} from "react";


const StockOptions = () => {
  const dispatch = useDispatch();
  const savedStockValues = useSelector(state => state.stockOptions.history);
  
  const [stockValue, setStockValue] = useState("");

  const onClickEvent = useCallback(() => {
    dispatch(addOption(stockValue));
    setStockValue("");
  }, [dispatch, stockValue]);

  const onStockValueChange = useCallback(({target: {value}}) => {
    setStockValue(value);
  }, []);

  return (
    <div className="card">
      <VStack spacing={10}>
        {savedStockValues && (<Text>{savedStockValues.map(value => value + " ")}</Text>)}
        <Group attached w="full" maxW="sm">
          <Input flex="1" placeholder="Enter stock option" value={stockValue} onChange={onStockValueChange}/>
          <Button bg="bg.subtle" variant="outline" onClick={onClickEvent}>
            Add
          </Button>
        </Group>
      </VStack>
    </div>
  );
};

export default StockOptions;