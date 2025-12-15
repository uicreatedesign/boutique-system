<?php

namespace App\Console\Commands;

use App\Services\CustomerService;
use Illuminate\Console\Command;

class SyncCustomersWithUsers extends Command
{
    protected $signature = 'customers:sync-users';
    protected $description = 'Sync existing customers with user accounts';

    public function handle(CustomerService $customerService)
    {
        $this->info('Starting customer-user synchronization...');
        
        $synced = $customerService->syncExistingCustomers();
        
        $this->info("Successfully synced {$synced} customers with user accounts.");
        $this->info('Default password for new accounts: password123');
        $this->warn('Please ask customers to change their passwords after first login.');
        
        return 0;
    }
}