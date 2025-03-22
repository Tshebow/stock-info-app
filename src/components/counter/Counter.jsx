import "./Counter.css";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "./counterSlice";
import {Button, Group, Input, Text, VStack} from "@chakra-ui/react";
import {useCallback, useState} from "react";


const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  const [stockValue, setStockValue] = useState("");
  const [savedStockValues, setSavedStockValues] = useState([]);

  const onClickEvent = useCallback(() => {
    savedStockValues.push(stockValue);
    setSavedStockValues(savedStockValues);
    console.log(savedStockValues);
    setStockValue("");
  }, [savedStockValues, stockValue]);

  const onStockValueChange = useCallback(({target: {value}}) => {
    console.log(value);
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
        <Button onClick={() => dispatch(increment())}>
          count is {count}
        </Button>
      </VStack>
    </div>
  );
};

export default Counter;