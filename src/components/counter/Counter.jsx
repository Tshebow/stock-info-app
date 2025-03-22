import "./Counter.css";
import {useSelector, useDispatch} from "react-redux";
import {increment} from "./counterSlice";
import {VStack, Group, Input, Button} from "@chakra-ui/react";


const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <VStack spacing={10}>
        <Group attached w="full" maxW="sm">
          <Input flex="1" placeholder="Enter stock option" />
          <Button bg="bg.subtle" variant="outline">
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