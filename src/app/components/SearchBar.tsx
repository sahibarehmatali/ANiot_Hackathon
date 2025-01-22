// app/components/SearchBar.tsx
interface SearchBarProps {
    onSearch: (query: string) => void;
  }
  
  export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border rounded"
      />
    );
  }