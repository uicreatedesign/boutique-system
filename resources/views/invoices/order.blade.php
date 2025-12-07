<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Invoice - {{ $order->order_number }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            color: #333;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #333;
            padding-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 32px;
        }
        .header p {
            margin: 5px 0;
            color: #666;
        }
        .invoice-info {
            display: table;
            width: 100%;
            margin-bottom: 30px;
        }
        .invoice-info > div {
            display: table-cell;
            width: 50%;
            vertical-align: top;
        }
        .invoice-info h3 {
            margin: 0 0 10px 0;
            font-size: 16px;
            color: #333;
        }
        .invoice-info p {
            margin: 5px 0;
            font-size: 14px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        table th {
            background-color: #f5f5f5;
            padding: 12px;
            text-align: left;
            border-bottom: 2px solid #ddd;
            font-weight: bold;
        }
        table td {
            padding: 10px 12px;
            border-bottom: 1px solid #eee;
        }
        .totals {
            float: right;
            width: 300px;
        }
        .totals table {
            margin-bottom: 0;
        }
        .totals td {
            border: none;
            padding: 8px 12px;
        }
        .totals .total-row {
            font-weight: bold;
            font-size: 16px;
            border-top: 2px solid #333;
        }
        .footer {
            margin-top: 50px;
            text-align: center;
            color: #666;
            font-size: 12px;
            border-top: 1px solid #ddd;
            padding-top: 20px;
        }
        .badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>INVOICE</h1>
        <p>{{ config('app.name') }}</p>
        <p>Invoice #: {{ $order->order_number }}</p>
    </div>

    <div class="invoice-info">
        <div>
            <h3>Bill To:</h3>
            <p><strong>{{ $order->customer->name }}</strong></p>
            <p>{{ $order->customer->phone }}</p>
            @if($order->customer->email)
            <p>{{ $order->customer->email }}</p>
            @endif
        </div>
        <div style="text-align: right;">
            <p><strong>Order Date:</strong> {{ $order->order_date->format('d M, Y') }}</p>
            <p><strong>Delivery Date:</strong> {{ $order->delivery_date->format('d M, Y') }}</p>
            <p><strong>Status:</strong> <span class="badge" style="background-color: {{ $order->stitchingStatus->color }}; color: white;">{{ $order->stitchingStatus->name }}</span></p>
            <p><strong>Priority:</strong> {{ ucfirst($order->priority) }}</p>
        </div>
    </div>

    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Details</th>
                <th style="text-align: right;">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <strong>{{ $order->garmentType->name }}</strong><br>
                    <small>Tailor: {{ $order->tailor->name }}</small>
                </td>
                <td>
                    @if($order->measurement)
                    Measurement: {{ $order->measurement->measurement_type }}<br>
                    @endif
                    @if($order->customer_fabric)
                    Fabric: Customer Provided
                    @elseif($order->fabric)
                    Fabric: {{ $order->fabric->name }}
                    @endif
                </td>
                <td style="text-align: right;">${{ number_format($order->total_amount, 2) }}</td>
            </tr>
            @if($order->special_instructions)
            <tr>
                <td colspan="3">
                    <strong>Special Instructions:</strong><br>
                    {{ $order->special_instructions }}
                </td>
            </tr>
            @endif
        </tbody>
    </table>

    <div class="totals">
        <table>
            <tr>
                <td>Subtotal:</td>
                <td style="text-align: right;">${{ number_format($order->total_amount, 2) }}</td>
            </tr>
            @if($order->discount > 0)
            <tr>
                <td>Discount:</td>
                <td style="text-align: right;">-${{ number_format($order->discount, 2) }}</td>
            </tr>
            @endif
            <tr class="total-row">
                <td>Total:</td>
                <td style="text-align: right;">${{ number_format($order->total_amount - $order->discount, 2) }}</td>
            </tr>
            <tr>
                <td>Paid:</td>
                <td style="text-align: right;">${{ number_format($order->payments->sum('amount'), 2) }}</td>
            </tr>
            <tr class="total-row">
                <td>Balance Due:</td>
                <td style="text-align: right;">${{ number_format($order->balance_due, 2) }}</td>
            </tr>
        </table>
    </div>

    <div style="clear: both;"></div>

    @if($order->payments->count() > 0)
    <h3 style="margin-top: 40px;">Payment History</h3>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            @foreach($order->payments as $payment)
            <tr>
                <td>{{ $payment->payment_date->format('d M, Y') }}</td>
                <td>${{ number_format($payment->amount, 2) }}</td>
                <td>{{ ucfirst($payment->payment_method) }}</td>
                <td>{{ ucfirst($payment->payment_type) }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    @endif

    <div class="footer">
        <p>Thank you for your business!</p>
        <p>{{ config('app.name') }} - Boutique Management System</p>
    </div>
</body>
</html>
