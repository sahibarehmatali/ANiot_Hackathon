import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({ text, onClick, href, className }: ButtonProps) {
  const styles = `bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {text}
    </button>
  );
}