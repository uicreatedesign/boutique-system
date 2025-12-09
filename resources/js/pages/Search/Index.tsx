import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { Search, Filter, Save, History, Star, X } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { router } from '@inertiajs/react';

interface SearchResult {
    id: number;
    title: string;
    subtitle: string;
    type: string;
    url: string;
    created_at: string;
}

interface SavedSearch {
    id: string;
    name: string;
    query: string;
    filters: any;
    created_at: string;
}

export default function SearchIndex() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);
    const [searchHistory, setSearchHistory] = useState<any[]>([]);
    
    // Filters
    const [filters, setFilters] = useState({
        date_from: null as Date | null,
        date_to: null as Date | null,
        status: '',
        type: ''
    });

    useEffect(() => {
        loadSavedSearches();
        loadSearchHistory();
    }, []);

    const loadSavedSearches = async () => {
        try {
            const response = await axios.get('/api/search/saved');
            setSavedSearches(response.data.searches);
        } catch (error) {
            console.error('Failed to load saved searches:', error);
        }
    };

    const loadSearchHistory = async () => {
        try {
            const response = await axios.get('/api/search/history');
            setSearchHistory(response.data.history);
        } catch (error) {
            console.error('Failed to load search history:', error);
        }
    };

    const performSearch = async () => {
        if (!query.trim()) return;
        
        setLoading(true);
        try {
            const params = {
                q: query,
                filters: {
                    ...filters,
                    date_from: filters.date_from ? format(filters.date_from, 'yyyy-MM-dd') : null,
                    date_to: filters.date_to ? format(filters.date_to, 'yyyy-MM-dd') : null,
                }
            };
            
            const response = await axios.get('/api/search', { params });
            setResults(response.data.results);
        } catch (error) {
            console.error('Search failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const saveSearch = async () => {
        const name = prompt('Enter a name for this search:');
        if (!name) return;

        try {
            await axios.post('/api/search/save', {
                name,
                query,
                filters
            });
            loadSavedSearches();
        } catch (error) {
            console.error('Failed to save search:', error);
        }
    };

    const loadSavedSearch = (search: SavedSearch) => {
        setQuery(search.query);
        setFilters(search.filters);
    };

    const clearFilters = () => {
        setFilters({
            date_from: null,
            date_to: null,
            status: '',
            type: ''
        });
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
        <AppLayout>
            <Head title="Advanced Search" />
            
            <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Advanced Search</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Search Form */}
                    <div className="lg:col-span-3 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Search className="h-5 w-5" />
                                    Search & Filters
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Search across all modules..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && performSearch()}
                                        className="flex-1"
                                    />
                                    <Button onClick={performSearch} disabled={loading}>
                                        <Search className="h-4 w-4 mr-2" />
                                        {loading ? 'Searching...' : 'Search'}
                                    </Button>
                                    <Button variant="outline" onClick={saveSearch} disabled={!query}>
                                        <Save className="h-4 w-4" />
                                    </Button>
                                </div>

                                {/* Filters */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
                                    <div>
                                        <Label>Date From</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className={cn(
                                                        "w-full justify-start text-left font-normal",
                                                        !filters.date_from && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {filters.date_from ? format(filters.date_from, "PPP") : "Pick a date"}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={filters.date_from}
                                                    onSelect={(date) => setFilters(prev => ({ ...prev, date_from: date }))}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <div>
                                        <Label>Date To</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className={cn(
                                                        "w-full justify-start text-left font-normal",
                                                        !filters.date_to && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {filters.date_to ? format(filters.date_to, "PPP") : "Pick a date"}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={filters.date_to}
                                                    onSelect={(date) => setFilters(prev => ({ ...prev, date_to: date }))}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <div>
                                        <Label>Type</Label>
                                        <Select value={filters.type} onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="All types" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="">All types</SelectItem>
                                                <SelectItem value="customer">Customers</SelectItem>
                                                <SelectItem value="order">Orders</SelectItem>
                                                <SelectItem value="tailor">Tailors</SelectItem>
                                                <SelectItem value="fabric">Fabrics</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="flex items-end">
                                        <Button variant="outline" onClick={clearFilters} className="w-full">
                                            <X className="h-4 w-4 mr-2" />
                                            Clear
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Results */}
                        {results.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Search Results ({results.length})</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {results.map((result) => (
                                            <div
                                                key={`${result.type}-${result.id}`}
                                                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                                                onClick={() => router.visit(result.url)}
                                            >
                                                <div className="flex-1">
                                                    <div className="font-medium">{result.title}</div>
                                                    <div className="text-sm text-muted-foreground">{result.subtitle}</div>
                                                    <div className="text-xs text-muted-foreground">{result.created_at}</div>
                                                </div>
                                                <Badge className={getTypeColor(result.type)}>
                                                    {result.type}
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Saved Searches */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="h-4 w-4" />
                                    Saved Searches
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {savedSearches.length === 0 ? (
                                    <p className="text-sm text-muted-foreground">No saved searches</p>
                                ) : (
                                    <div className="space-y-2">
                                        {savedSearches.map((search) => (
                                            <Button
                                                key={search.id}
                                                variant="ghost"
                                                size="sm"
                                                className="w-full justify-start"
                                                onClick={() => loadSavedSearch(search)}
                                            >
                                                <Star className="h-3 w-3 mr-2" />
                                                {search.name}
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Search History */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <History className="h-4 w-4" />
                                    Recent Searches
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {searchHistory.length === 0 ? (
                                    <p className="text-sm text-muted-foreground">No recent searches</p>
                                ) : (
                                    <div className="space-y-2">
                                        {searchHistory.slice(0, 5).map((search, index) => (
                                            <Button
                                                key={index}
                                                variant="ghost"
                                                size="sm"
                                                className="w-full justify-start"
                                                onClick={() => setQuery(search.query)}
                                            >
                                                <History className="h-3 w-3 mr-2" />
                                                {search.query}
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}