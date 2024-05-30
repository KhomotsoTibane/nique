"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import Footer from "../Footer";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string({
    message: "Email must be at least 2 characters.",
    required_error: "A Date is required to make a reservation",
  }),
  guests: z.string(),
  date: z.date({
    required_error: "A Date is required to make a reservation",
  }),
  time: z.string({
    required_error: "A Time is required to make a reservation",
  }),
});

const Reservation = () => {
  const { control, watch, setValue } = useForm();
  const selectedDate = watch("date");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      guests: "1",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    // await fetch("api/emails", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: values.name,
    //     email: values.email,
    //     guests: values.guests,
    //     date: values.date,
    //     time: values.time,
    //   }),
    // });
  }

  const today = new Date();

  console.log("today", today);

  console.log("slected", selectedDate);

  return (
    <div className="flex max-h-screen min-h-screen w-full flex-col gap-6 overflow-y-auto bg-dark text-default">
      <div className="flex flex-col gap-6 p-8">
        <div>
          <h2 className="">Book a table</h2>
          <p className="text-large max-w-[700px] text-muted">
            Experience exceptional dining with us. Reserve your table today and indulge in a
            culinary journey like no other. Enjoy exquisite dishes, a welcoming atmosphere, and
            top-notch service.
          </p>
        </div>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className=" border-muted bg-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="Joe@example.com"
                        type="email"
                        autoCapitalize="none"
                        className=" border-muted bg-transparent"
                        autoComplete="email"
                        autoCorrect="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <FormControl>
                      <Input
                        className=" border-muted bg-transparent"
                        type="number"
                        min={1}
                        max={50}
                        placeholder=""
                        {...field}
                        onChange={(e) => {
                          form.setValue("guests", e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                <FormField
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full md:w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto size-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto bg-default p-0" align="start" side="top">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              setValue("date", date);
                            }}
                            disabled={[{ dayOfWeek: [1] }, { before: new Date() }]}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="time"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col md:w-[240px]">
                      <FormLabel>Time</FormLabel>
                      <Select onValueChange={field.onChange} disabled={!selectedDate}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pick a time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-default">
                          <SelectItem value="18">18:00</SelectItem>
                          <SelectItem value="19">19:00</SelectItem>
                          <SelectItem value="20">20:00</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full rounded-3xl text-black">
                Book a table
              </Button>
            </form>
          </Form>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
