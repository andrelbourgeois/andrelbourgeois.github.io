"use client"
import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

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


export function ContactForm() {
    const [state, handleSubmit] = useForm("mvoerrqv");
    if (state.succeeded) {
        return <p>Thanks for your message!</p>;
    }
   

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="firstname" name="firstname" placeholder=" ..." className="border-2 border-solid border-current rounded-sm"/>
            <ValidationError 
            prefix="First Name" 
            field="firstname"
            errors={state.errors}
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" type="lastname" name="lastname" placeholder=" ..." className="border-2 border-solid border-current rounded-sm"/>
            <ValidationError 
            prefix="Last Name" 
            field="lastname"
            errors={state.errors}
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder=" ..." className="border-2 border-solid border-current rounded-sm"/>
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder=" ..." className="border-2 border-solid border-current rounded-sm"/>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
        </div>
        <Button type="submit" disabled={state.submitting}>Submit</Button>
    </form>
  )
}


{/*

<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

*/}