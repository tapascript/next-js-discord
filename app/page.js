import MessageForm from "./_components/message-form";
export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-3">Send a message to tapaScript</h1>
      <MessageForm />
    </div>
  )
  
}
