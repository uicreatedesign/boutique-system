<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Sales Report</title>
    <style>
        body { font-family: Arial, sans-serif; font-size: 12px; }
        .header { text-align: center; margin-bottom: 30px; }
        .header h1 { margin: 0; font-size: 24px; }
        .header p { margin: 5px 0; color: #666; }
        .summary { margin-bottom: 30px; }
        .summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
        .summary-item { padding: 15px; background: #f5f5f5; border-radius: 5px; }
        .summary-item label { display: block; color: #666; font-size: 11px; margin-bottom: 5px; }
        .summary-item value { display: block; font-size: 18px; font-weight: bold; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f5f5f5; font-weight: bold; }
        .text-right { text-align: right; }
        .footer { margin-top: 30px; text-align: center; color: #666; font-size: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Sales Report</h1>
        <p>Period: {{ $startDate }} to {{ $endDate }}</p>
        <p>Generated on: {{ now()->format('d M Y, h:i A') }}</p>
    </div>

    <div class="summary">
        <div class="summary-grid">
            <div class="summary-item">
                <label>Total Orders</label>
                <value>{{ $orders->count() }}</value>
            </div>
            <div class="summary-item">
                <label>Total Revenue</label>
                <value>${{ number_format($totalRevenue, 2) }}</value>
            </div>
            <div class="summary-item">
                <label>Total Paid</label>
                <value>${{ number_format($totalPaid, 2) }}</value>
            </div>
        </div>
    </div>

    <table>
        <thead>
            <tr>
                <th>Order #</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Garment</th>
                <th>Status</th>
                <th class="text-right">Amount</th>
            </tr>
        </thead>
        <tbody>
            @foreach($orders as $order)
            <tr>
                <td>{{ $order->order_number }}</td>
                <td>{{ $order->order_date->format('d M Y') }}</td>
                <td>{{ $order->customer->name }}</td>
                <td>{{ $order->garmentType->name }}</td>
                <td>{{ $order->stitchingStatus->name }}</td>
                <td class="text-right">${{ number_format($order->total_amount, 2) }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="footer">
        <p>Boutique Management System - Sales Report</p>
    </div>
</body>
</html>
