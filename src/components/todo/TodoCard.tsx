import { useAppDispatch } from "@/redux/hooks";
import { Button } from "../ui/button";
import { deleteTodo, toggleComplete } from "@/redux/features/todoSlide";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
type TTdodoCardProps = {
  title: string;
  description: string;
  id: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  title,
  description,
  id,
  isCompleted,
  priority,
}: TTdodoCardProps) => {
  // const dispatch = useAppDispatch();
  const [deleteTodo, {}] = useDeleteTodoMutation();
  const [updateTodo, {}] = useUpdateTodoMutation();

  // console.log({ data, isSuccess, isLoading });

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input
        onChange={() =>
          updateTodo({
            data: { title, description, priority, isCompleted: !isCompleted },
            id,
          })
        }
        type="checkbox"
        name="complete"
        defaultChecked={isCompleted}
        id=""
        className="mr-3"
      />
      <p className="font-semibold flex-1">{title}</p>
      {/* <p>Time</p> */}
      <div className="flex-1 flex items-center gap-2">
        <div
          className={`size-2 rounded-full  ${
            priority === "high" && "bg-red-500"
          }
          ${priority === "medium" && "bg-yellow-500"}
          ${priority === "low" && "bg-green-500"}
          `}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-gray-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="space-x-5">
        <Button onClick={() => deleteTodo(id)} className="bg-red-500">
          <svg
            className="size-4"
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Button>
        <Button className="bg-[#5C53FE]">
          <svg
            className="size-4"
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
