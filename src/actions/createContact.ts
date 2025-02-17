"use server";

export const createContact = async (data: FormData) => {
  const contactData = Object.fromEntries(data.entries());
  // console.log("🚀 ~ createContact ~ contactData:", contactData);

  const res = await fetch(`${process.env.Base_Url}/createMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
  if (res) {
    console.log("success");
  }
};
