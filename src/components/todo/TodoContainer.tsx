import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  //from local
  // const { todos } = useAppSelector((state) => state.todos);

  //from server

  const [priority, setPriority] = useState("");
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);
  // pollingInterval is for fetching time

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl   p-[5px]">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-5">
          {!isLoading && (
            <>
              {todos?.data?.map((item) => (
                <TodoCard
                  title={item.title}
                  description={item.description}
                  id={item._id}
                  isCompleted={item?.isCompleted}
                  priority={item?.priority}
                ></TodoCard>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
