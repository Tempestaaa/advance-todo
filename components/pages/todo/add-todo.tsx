"use client";

import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/date-picker";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "lucide-react";

export default function AddTodo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          <span>Add new task</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Add Todo</SheetTitle>
        </SheetHeader>

        <FieldSet className="p-4 h-full">
          <FieldGroup className="h-full">
            <Field orientation="horizontal">
              <FieldLabel>Name</FieldLabel>
              <Input placeholder="Enter todo" />
            </Field>

            <Field orientation="horizontal">
              <FieldLabel>Start date</FieldLabel>
              <DatePicker />
            </Field>

            <Field orientation="horizontal">
              <FieldLabel>Due date</FieldLabel>
              <DatePicker />
            </Field>

            <Field>
              <Textarea placeholder="Write a note" className="h-40" />
            </Field>

            <Field className="mt-auto">
              <Button>Save</Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </SheetContent>
    </Sheet>
  );
}
