// app/components/FilterPanel.tsx
interface FilterPanelProps {
    onFilterChange: (filters: unknown) => void;
  }
  
  export default function FilterPanel({ onFilterChange }: FilterPanelProps) {
    return (
      <div className="space-y-4">
        <div>
          <label>Price Range</label>
          <input type="range" min="0" max="1000" onChange={(e) => onFilterChange({ price: e.target.value })} />
        </div>
        {/* Add more filters here */}
      </div>
    );
  }