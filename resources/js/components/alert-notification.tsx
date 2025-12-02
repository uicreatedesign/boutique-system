import { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface AlertNotificationProps {
  type: 'success' | 'error';
  title: string;
  message: string;
  show: boolean;
  onClose: () => void;
  duration?: number;
}

export default function AlertNotification({ 
  type, 
  title, 
  message, 
  show, 
  onClose, 
  duration = 3000 
}: AlertNotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
      <Alert variant={type === 'error' ? 'destructive' : 'default'} className={type === 'success' ? 'border-green-200 bg-green-50 text-green-800' : ''}>
        {type === 'success' ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
}