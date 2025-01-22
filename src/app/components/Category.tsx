// app/components/Category.tsx
interface CategoryProps {
    categories: string[];
    onSelectCategory: (category: string) => void;
  }
  
  export default function Category({ categories, onSelectCategory }: CategoryProps) {
    return (
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className="block w-full text-left p-2 hover:bg-gray-100 rounded"
          >
            {category}
          </button>
        ))}
      </div>
    );
  }