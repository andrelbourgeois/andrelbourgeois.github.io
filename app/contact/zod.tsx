"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useSubmit } from '@formspree/react';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
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
})

export function ContactForm() {
    const {
        formState: { errors, isSubmitSuccessful, isSubmitting },
        handleSubmit,
        register,
        setError,
      } = useForm<z.infer<typeof FormSchema>>();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
        firstname: "",
        lastname: "",
        email: "",
        text: "",
        },
    })

    const FORMSPREE_FORM_ID = "mvoerrqv";

    const submit = useSubmit<z.infer<typeof FormSchema>>(
        FORMSPREE_FORM_ID,
        {
          onError(errs) {
            const formErrs = errs.getFormErrors();
            for (const { code, message } of formErrs) {
              setError(`root.${code}`, {
                type: code,
                message,
              });
            }
            const fieldErrs = errs.getAllFieldErrors();
        for (const [field, errs] of fieldErrs) {
          setError(field, {
            message: errs.map((e: { message: any; }) => e.message).join(', '),
          });
        }
      },
    }
  );


  

  {/*function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }*/}

  return (
    <Form {...form}>
      {isSubmitSuccessful ? (
        <h2>Your message has been sent successfully!</h2>
      ) : (  
        <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
                <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                    <Input placeholder="..." {...field} />
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
                    <Input placeholder="..." {...field} />
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
                    <Input placeholder="..." {...field} />
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
                    <Input placeholder="..." {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
        </form>
        )}
    </Form>
  )
}
