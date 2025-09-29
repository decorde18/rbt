import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className='relative w-full max-w-md'>
      <div className='absolute left-4 top-1/2 -translate-y-3/4 text-muted'>
        <Search size={20} />
      </div>
      <input
        type='text'
        placeholder='Search clients, forms, or sessions...'
        className='w-96 pl-12 pr-4 py-3 rounded-md border border-border bg-background text-text placeholder-textLabel focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 '
      />
    </div>
  );
}

export default SearchBar;
