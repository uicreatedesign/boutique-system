import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search, FileText, Users, Scissors, Package, Ruler, Shirt, BarChart, Settings, Bell } from 'lucide-react';
import { router } from '@inertiajs/react';

const pages = [
    { name: 'Dashboard', route: '/dashboard', icon: BarChart, keywords: ['dashboard', 'home', 'overview'] },
    { name: 'Customers', route: '/customers', icon: Users, keywords: ['customer', 'client', 'people'] },
    { name: 'Orders', route: '/orders', icon: FileText, keywords: ['order', 'ord', 'delivery', 'payment', 'invoice'] },
    { name: 'Tailors', route: '/tailors', icon: Scissors, keywords: ['tailor', 'stitching', 'sewing', 'worker'] },
    { name: 'Fabrics', route: '/fabrics', icon: Package, keywords: ['fabric', 'material', 'cloth', 'inventory'] },
    { name: 'Measurements', route: '/measurements', icon: Ruler, keywords: ['measurement', 'size', 'dimension'] },
    { name: 'Garment Types', route: '/garment-types', icon: Shirt, keywords: ['garment', 'shirt', 'pant', 'kurti', 'dress', 'clothing'] },
    { name: 'Users', route: '/users', icon: Users, keywords: ['user', 'admin', 'manager', 'staff'] },
    { name: 'Reports', route: '/reports', icon: BarChart, keywords: ['report', 'analytics', 'statistics'] },
    { name: 'Settings', route: '/settings', icon: Settings, keywords: ['setting', 'config', 'preference'] },
    { name: 'Notifications', route: '/notifications', icon: Bell, keywords: ['notification', 'notific', 'alert', 'message'] }
];

export default function SimpleSearch() {
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState<typeof pages>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (query.trim()) {
            const filtered = pages.filter(page => 
                page.name.toLowerCase().includes(query.toLowerCase()) ||
                page.keywords.some(keyword => keyword.includes(query.toLowerCase()))
            );
            setSuggestions(filtered);
            setShowSuggestions(filtered.length > 0);
        } else {
            setShowSuggestions(false);
        }
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSuggestionClick = (route: string) => {
        router.get(route);
        setQuery('');
        setShowSuggestions(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (suggestions.length > 0) {
            handleSuggestionClick(suggestions[0].route);
        }
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    ref={inputRef}
                    placeholder="Search pages..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query && setShowSuggestions(suggestions.length > 0)}
                    className="pl-8 w-64"
                />
            </form>
            
            {showSuggestions && (
                <div 
                    ref={dropdownRef}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto"
                >
                    {suggestions.map((page) => {
                        const Icon = page.icon;
                        return (
                            <div
                                key={page.route}
                                onClick={() => handleSuggestionClick(page.route)}
                                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                            >
                                <Icon className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">{page.name}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}