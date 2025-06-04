export default function CardFooter({ className = '', children }) {
  return <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>;
}
