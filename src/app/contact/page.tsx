"use client";

import { createContact } from "@/actions/createContact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form";
import { toast } from "sonner";

const ContactPage = () => {
  const handleSubmit = async (formData: FormData) => {
    try {
      await createContact(formData);
      toast.success("Message sent successfully! 🎉");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="container mx-auto my-10">
      <div className="mt-4">
        <h1 className="text-4xl font-semibold text-center">Contact</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>
      <div className="max-w-5xl mx-auto p-10 rounded-lg">
        <div className="mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <Form action={handleSubmit} className="xl:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
            <div className="xl:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                placeholder="Write your message"
                name="message"
              ></Textarea>
            </div>
            <div className="xl:col-span-2">
              <Button type="submit">Send Message</Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
