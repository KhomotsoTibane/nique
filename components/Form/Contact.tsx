"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
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
import Footer from "../Footer";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string({
    message: "Email must be at least 2 characters.",
    required_error: "Email is required",
  }),
  message: z.string({
    message: "Email must be at least 2 characters.",
    required_error: "Message is required",
  }),

});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex max-h-screen min-h-screen w-full flex-col gap-6 bg-dark text-default lg:overflow-y-auto">
      <div className="flex flex-col gap-6 p-8">
        <div>
          <p className="text-large max-w-[600px] text-muted">
            We would love to hear from you! Whether you have questions, feedback, or need assistance,
            our team is here to help. Reach out to us, and we will get back to you as soon as
            possible.
          </p>
        </div>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
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
                control={form.control}
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
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        className=" border-muted bg-transparent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full rounded-3xl text-black">
                Send Message
              </Button>
            </form>
          </Form>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
