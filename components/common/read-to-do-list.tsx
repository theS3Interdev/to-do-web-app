"use client";

import { CheckCheck, Trash2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ToDo } from "@/lib/utils/types";

export const ReadToDoList = ({ id, title, done }: ToDo) => {
  return (
    <Card className="my-5 w-full space-y-5">
      <CardHeader>
        <CardTitle className={done ? "line-through" : ""}>{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <Button>
          <CheckCheck className="mr-2 h-4 w-4" />
          Update Status
        </Button>

        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
