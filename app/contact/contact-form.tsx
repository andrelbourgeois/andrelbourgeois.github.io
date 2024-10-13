"use client"

import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstname: z.string().min(1, {
    message: "First name cannot be left blank.",
  }),
  lastname: z.string().min(2, {
    message: "Last name cannot be left blank.",
  }),
  email: z.string().min(1, {
    message: "Email cannot be left blank.",
  }).email("This is not a valid email."),
  text: z.string().min(1, {
    message: "Message cannot be left blank.",
  }),
});

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false); // State to track form submission
  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      text: "",
    },
  });
 
  // Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Make a POST request to the Formspree endpoint
      const response = await axios.post('https://formspree.io/f/mvoerrqv', values);

      // Handle success response
      console.log('Form submitted successfully!', response.data);
      setSubmitted(true);
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  }

  return (
    <Card className="border-muted-foreground">
      <Form {...form}>
        {!submitted ? ( // Render form if not submitted
          <form onSubmit={form.handleSubmit(onSubmit)} className="pr-6 pl-6 py-6 space-y-4" acceptCharset="UTF-8">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="..." {...field} className="border-muted-foreground pr-60" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="..." {...field} className="border-muted-foreground pr-60" />
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
                  <Input placeholder="..." {...field} className="border-muted-foreground pr-60" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input placeholder="..." {...field} className="border-muted-foreground pr-60" />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
            <Button type="submit">Submit</Button>
          </form>
        ) : ( // Render thank you message if submitted
          <div>
            <p>Thank you for your submission!</p>
          </div>
        )}
      </Form>
     </Card> 
  );
}
