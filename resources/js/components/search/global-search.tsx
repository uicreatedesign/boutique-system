import { useState, useEffect, useRef } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { router } from '@inertiajs/react';
import axios from 'axios';

interface SearchResult {
    id: number;
    title: string;
    subtitle: string;
    type: string;
    url: string;
    created_at: string;
}

export default function GlobalSearch() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const debounceRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (query.length > 2) {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
            
            debounceRef.current = setTimeout(() => {
                performSearch();
            }, 300);
        } else {
            setResults([]);
        }

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [query]);

    const performSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/search', {
                params: { q: query }
            });
            setResults(response.data.results);
        } catch (error) {
            console.error('Search failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleResultClick = (result: SearchResult) => {
        router.visit(result.url);
        setOpen(false);
        setQuery('');
    };

    const getTypeColor = (type: string) => {
        const colors = {
            customer: 'bg-blue-100 text-blue-800',
            order: 'bg-green-100 text-green-800',
            tailor: 'bg-purple-100 text-purple-800',
            fabric: 'bg-orange-100 text-orange-800',
        };
        return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-64 justify-start text-muted-foreground"
                >
                    <Search className="mr-2 h-4 w-4" />
                    Search everything...
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="start">
                <Command>
                    <div className="flex items-center border-b px-3">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <CommandInput
                            placeholder="Search customers, orders, tailors..."
                            value={query}
                            onValueChange={setQuery}
                        />
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.visit('/search')}
                        >
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                    
                    <CommandList>
                        {loading && (
                            <div className="p-4 text-center text-sm text-muted-foreground">
                                Searching...
                            </div>
                        )}
                        
                        {!loading && query.length > 2 && results.length === 0 && (
                            <CommandEmpty>No results found.</CommandEmpty>
                        )}
                        
                        {results.length > 0 && (
                            <CommandGroup heading="Results">
                                {results.map((result) => (
                                    <CommandItem
                                        key={`${result.type}-${result.id}`}
                                        onSelect={() => handleResultClick(result)}
                                        className="cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex-1">
                                                <div className="font-medium">{result.title}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    {result.subtitle}
                                                </div>
                                            </div>
                                            <Badge 
                                                variant="secondary" 
                                                className={`ml-2 ${getTypeColor(result.type)}`}
                                            >
                                                {result.type}
                                            </Badge>
                                        </div>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )}
                        
                        {query.length <= 2 && (
                            <div className="p-4">
                                <div className="text-sm text-muted-foreground mb-2">
                                    Type to search across all modules
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full justify-start"
                                    onClick={() => router.visit('/search')}
                                >
                                    <Search className="mr-2 h-4 w-4" />
                                    Advanced Search
                                </Button>
                            </div>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}