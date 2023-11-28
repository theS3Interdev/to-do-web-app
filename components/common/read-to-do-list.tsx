"use client";

import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckCheck, Trash2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { ToDo } from "@/lib/utils/types";

export const ReadToDoList = ({ id, title, done }: ToDo) => {
  const queryClient = useQueryClient();

  const { toast } = useToast();

  /* define the delete mutation */
  const { mutate: deleteToDo, isPending: deleteToDoPending } = useMutation({
    mutationFn: async () => await axios.post("api/todo/delete", { id: id }),
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Information",
        description: "Task item deleted successfully.",
      });

      queryClient.invalidateQueries({ queryKey: ["userToDo"] });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: `The following error has occurred: ${error.message}`,
      });
    },
  });

  /* define the update mutation */
  const { mutate: updateToDo, isPending: updateToDoPending } = useMutation({
    mutationFn: async () => await axios.post("api/todo/update", { id: id }),
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Information",
        description: "Task item status updated successfully.",
      });

      queryClient.invalidateQueries({ queryKey: ["userToDo"] });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: `The following error has occurred: ${error.message}`,
      });
    },
  });

  return (
    <Card className="my-5 w-full space-y-5">
      <CardHeader>
        <CardTitle className={done ? "line-through" : ""}>{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <Button
          disabled={updateToDoPending || deleteToDoPending}
          onClick={() => updateToDo()}
        >
          <CheckCheck className="mr-2 h-4 w-4" />
          Update Status
        </Button>

        <Button
          variant="destructive"
          disabled={deleteToDoPending || updateToDoPending}
          onClick={() => deleteToDo()}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
