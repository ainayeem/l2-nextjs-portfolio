type TMessage = {
  _id: string;
  name: string;
  email: string;
  message: string;
};

const ViewMessagesPage = async () => {
  const res = await fetch(`${process.env.Base_Url}/message`, {
    cache: "no-store",
  });
  const messages = await res.json();
  //   console.log("🚀 ~ ViewMessagesPage ~ messages:", messages);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold">View Messages</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>

      {messages.length === 0 ? (
        <p className="text-center text-gray-500">No messages available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1">
          {messages.map((message: TMessage) => (
            <div key={message._id} className="shadow-lg rounded-lg p-4 border border-gray-200">
              <h2 className="text-lg font-semibold text-teal-600">{message.name}</h2>
              <p className="text-sm">Email: {message.email}</p>
              <p className="mt-2">Message: {message.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewMessagesPage;
