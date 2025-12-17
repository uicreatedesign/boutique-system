import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Bell, Clock, AlertCircle } from 'lucide-react';
import axios from 'axios';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  created_at: string;
  read_at: string | null;
}

export default function NotificationBell() {
  const [unreadCount, setUnreadCount] = useState(0);
  const [recentNotifications, setRecentNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const [countResponse, notificationsResponse] = await Promise.all([
          axios.get('/api/notifications/unread-count'),
          axios.get('/api/notifications/recent')
        ]);
        setUnreadCount(countResponse.data.count);
        setRecentNotifications(notificationsResponse.data.slice(0, 3));
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchNotifications();
    
    // Poll for updates every 30 seconds
    const interval = setInterval(fetchNotifications, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warning':
      case 'error':
        return <AlertCircle className="h-4 w-4 text-orange-500" />;
      default:
        return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-9 w-9">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {unreadCount > 99 ? '99+' : unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="flex items-center justify-between p-3 border-b">
          <h3 className="font-semibold text-sm">Notifications</h3>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {unreadCount} new
            </Badge>
          )}
        </div>
        
        {recentNotifications.length === 0 ? (
          <div className="p-4 text-center text-sm text-muted-foreground">
            No notifications yet
          </div>
        ) : (
          <div className="max-h-64 overflow-y-auto">
            {recentNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-3 border-b last:border-b-0 hover:bg-muted/50 cursor-pointer ${
                  !notification.read_at ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {notification.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatTimeAgo(notification.created_at)}
                    </p>
                  </div>
                  {!notification.read_at && (
                    <div className="h-2 w-2 bg-blue-500 rounded-full flex-shrink-0 mt-1" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <DropdownMenuSeparator />
        <div className="p-2">
          <Link href="/notifications" className="block">
            <Button 
              variant="ghost" 
              className="w-full text-sm h-8"
              onClick={() => setIsOpen(false)}
            >
              See all notifications
            </Button>
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}