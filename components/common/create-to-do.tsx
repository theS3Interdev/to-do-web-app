"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Heading } from "@/components/index";

/* create the form schema */
const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "You must input a valid to do title." })
    .max(55),
});

export const CreateToDo = () => {
  const queryClient = useQueryClient();

  const title = "Create To Do item";

  const description = "Create the desired to do item";

  const { toast } = useToast();

  /* define the form */
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  /* define the mutation */
  const { mutate: createToDo, isPending: createToDoPending } = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) =>
      await axios.post("/api/todo/create", values),
    onSuccess: () => {
      toast({
        variant: "default",
        title: "Information",
        description: "Item added successfully.",
      });

      queryClient.invalidateQueries({ queryKey: ["userToDo"] });

      form.reset();
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
    <div>
      <Heading title={title} description={description} />

      <div className="flex items-center justify-between">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => createToDo(values))}
            className="my-5 w-full space-y-5"
          >
            <div className="mt-4 grid grid-cols-1">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        disabled={createToDoPending}
                        placeholder="Title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              disabled={createToDoPending}
              className="ml-auto"
              type="submit"
              onClick={() => createToDo}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Create To Do
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
