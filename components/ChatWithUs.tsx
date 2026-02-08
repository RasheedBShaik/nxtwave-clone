import Container from "./Container";

interface ChatWithUsProps {
  show: boolean;
}

const ChatWithUs = ({ show }: ChatWithUsProps) => {
  // If "show" is false, don't render anything
  if (!show) return null;

  return (
    <Container>
      <div className="fixed bottom-10 right-5 2xl:right-80 z-50 animate-in fade-in duration-500">
        <div className="flex px-8 items-center text-white font-semibold bg-[#3AC04C] p-3 rounded-4xl shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <p className="mr-2">Chat with us</p>
          <img src="chatWithUs/whatsapp-logo.png" alt="whatsapp-logo" className="w-8 h-8" />
        </div>
      </div>
    </Container>
  );
};

export default ChatWithUs;